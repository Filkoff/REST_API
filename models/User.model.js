const sequelize = require("sequelize");

const scheme = {
  name: sequelize.DataTypes.STRING,
  email: sequelize.DataTypes.STRING,
};

module.exports = (sequelize) => {
  let User = sequelize.define("User", scheme);
  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: "user_id",
      allowNull: false,
      as: "posts",
    });
  };
  return User;
};
