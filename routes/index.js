const UserController = require("../controller/Users.controller");
const PostController = require("../controller/Posts.controller");
const LikeController = require("../controller/Likes.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.getAllUsers);

  app.get("/api/users/:user_id/posts", PostController.getAllPostsOfUser);

  app.post("/api/post/create", PostController.createPost);

  app.delete("/api/posts/:id", PostController.deletePost);

  app.post("/api/posts/:post_id/like", LikeController.hitLike);
};
