"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "user1",
          email: "user1@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user2@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user3@test.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          id: 1,
          title: "post1",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "post2",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "post3",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "post4",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "post5",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "post6",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("Users", null, bulkDeleteOptions);
  },
};
