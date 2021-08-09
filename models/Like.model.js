module.exports = (sequelize, DataTypes) => {
  let Like = sequelize.define("Like", {});
  Like.associate = function (models) {
    Like.belongsTo(models.Post, {
      foreignKey: "post_id",
      onDelete: "CASCADE",
      allowNull: false,
    });

    Like.belongsTo(models.User, {
      foreignKey: "user_id",
      allowNull: false,
    });
  };
  return Like;
};
