const express = require("express");
const Like = require("./models").Like;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("passport");

const db = require("./models");
db.sequelize.sync();

app.use(
  session({
    secret: "hghtyNN23h",
    store: new FileStore(),
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 3600,
    },
    resave: false,
    saveUninitialized: false,
  })
);

require("./routes/index")(app);
const PORT = process.env.PORT || 8080;

require("./config-passport");
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ message: "Working!" });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(404)
        .send({ message: "Enter correct username and password!" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.send({ message: "You have been authorized" });
    });
  })(req, res, next);
});

const Post = require("./models").Post;

const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(404).send({ message: "You are not authorized" });
  }
};

app.get("/api/posts", auth, async (req, res) => {
  try {
    const postCollection = await Post.findAll({
      include: [
        {
          model: Like,
        },
      ],
    });

    return res.status(200).send(postCollection);
  } catch (e) {
    res.status(404).send({ message: e.message });
  }
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.send({ message: "You have been unauthorized" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;
