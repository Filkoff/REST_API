const Post = require("../models").Post;
const User = require("../models").User;
const Like = require("../models").Like;

module.exports = {
  async hitLike(req, res) {
    try {
      const likes = await Like.findAll();
      const exist = likes.some(
        (el) =>
          el.user_id == req.body.user_id && el.post_id == req.params.post_id
      );

      if (!exist) {
        const like = await Like.create({
          post_id: req.params.post_id,
          user_id: req.body.user_id,
        });
        res.status(200).send(like);
      } else {
        res.status(404).send({ message: "like is already exist" });
      }
    } catch (e) {
      res.status(404).send({ message: e.message });
    }
  },
};
