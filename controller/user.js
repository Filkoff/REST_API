const User = require("../models").User;

module.exports = {
  async getAllUsers(req, res) {
    try {
      const userCollection = await User.findAll();
      res.status(200).send(userCollection);
    } catch (e) {
      res.status(404).send({ message: e.message });
    }
  },
};
