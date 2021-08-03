const Post = require("../models").Post;
const User = require("../models").User;
const Like = require("../models").Like;

module.exports = {
  async getAllPostsOfUser(req, res) {
    try {
      const userCollection = await User.findAll({
        where: { id: req.params.user_id },
      });

      if (userCollection) {
        const postCollection = await Post.findAll({
          where: { user_id: req.params.user_id },
          include: [
            {
              model: Like,
            },
          ],
        });

        res.status(200).send(postCollection);
      } else {
        res.status(404).send({ message: "User Not Found" });
      }
    } catch (e) {
      res.status(404).send({ message: e.message });
    }
  },

  async createPost(req, res) {
    try {
      const post = await Post.create({
        title: req.body.title,
        user_id: req.body.user_id,
      });
      res.status(200).send(post);
    } catch (e) {
      res.status(404).send({ message: e.message });
    }
  },

  async deletePost(req, res) {
    try {
      const result = await Post.destroy({
        where: { id: req.params.id },
      });
      if (result === 1) {
        res.status(200).send({ message: "Post was deleted successfully!" });
      } else {
        res.status(404).send({ message: "There is no post with this id!" });
      }
    } catch (e) {
      res.status(404).send({ message: e.message });
    }
  },
};
