const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const adminDB = {
  id: 1,
  username: 'admin',
  password: 'admin',
};

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  const user = adminDB.id === id ? adminDB : false;
  done(null, user);
});

passport.use(
  new LocalStrategy(function(
    username,
    password,
    done
  ) {
    if (username === adminDB.username && password === adminDB.password) {
      return done(null, adminDB);
    } else {
      return done(null, false);
    }
  })
);