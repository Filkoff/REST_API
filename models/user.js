module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: "user_id",
      allowNull: false,
      as: "posts",
    });
  };
  return User;
};
