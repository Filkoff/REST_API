const userController = require("../controller").user;
const postController = require("../controller").post;
const likeController = require("../controller").like;
module.exports = (app) => {
  app.get("/api/users", userController.getAllUsers);

  app.get("/api/:user_id/posts", postController.getAllPostsOfUser);

  app.post("/api/post/create", postController.createPost);

  app.delete("/api/posts/:id", postController.deletePost);

  app.post("/api/posts/:post_id/like", likeController.hitLike);
};
