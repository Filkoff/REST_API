module.exports = (sequelize, DataTypes) => {
  let Post = sequelize.define("Post", {
    title: DataTypes.STRING,
  });
  Post.associate = function (models) {
    Post.hasMany(models.Like, { foreignKey: "post_id", allowNull: false });

    Post.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: "user_id",
      allowNull: false,
    });
  };
  return Post;
};
