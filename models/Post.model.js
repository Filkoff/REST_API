const sequelize = require("sequelize");

const scheme = {
  title: sequelize.DataTypes.STRING,
};

module.exports = (sequelize) => {
  let Post = sequelize.define("Post", scheme);
  Post.associate = function (models) {
    Post.hasMany(models.Like, { foreignKey: "post_id", allowNull: false });

    Post.belongsTo(models.User, {
      // onDelete: ,
      foreignKey: "user_id",
      allowNull: false,
    });
  };
  return Post;
};
