const { getAllUsers } = require("../controller/Users.controller");

import app from "../index";
const request = require("supertest");

describe("get users", () => {
  test("check get user status", async () => {
    const response = await request(app).get("/api/users", getAllUsers);
    expect(response.statusCode).toBe(200);
  });

  test("check get user object", async () => {
    const response = await request(app).get("/api/users", getAllUsers);
    expect(Object.keys(response.body[0])).toStrictEqual([
      "id",
      "name",
      "email",
      "createdAt",
      "updatedAt",
    ]);
  });
});
