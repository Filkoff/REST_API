const { hitLike } = require("../controller/Likes.controller");

import app from "../index";
const request = require("supertest");

describe("check likes", () => {
  test("testing like addition", async () => {
    const response = await request(app)
      .post("/api/posts/1/like", hitLike)
      .send({
        user_id: 2,
      });
    expect(response.statusCode).toBe(200);
  });

  test("testing like addition", async () => {
    const response = await request(app)
      .post("/api/posts/1/like", hitLike)
      .send({
        user_id: 2,
      });
    expect(response.statusCode).toBe(404);
  });
});
