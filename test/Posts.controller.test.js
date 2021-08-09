const {
  getAllPostsOfUser,
  createPost,
  deletePost,
} = require("../controller/Posts.controller");

import app from "../index";

const request = require("supertest");

describe("check all posts of user", () => {
  test("check all posts of existing user", async () => {
    const response = await request(app).get(
      "/api/users/1/posts",
      getAllPostsOfUser
    );
    expect(response.statusCode).toBe(200);
  });

  test("check user posts if user doesn't exist", async () => {
    const response = await request(app).get(
      "/api/users/9/posts",
      getAllPostsOfUser
    );
    expect(response.statusCode).toBe(404);
  });
});

describe("create post", () => {
  test("check post creation", async () => {
    const post = await request(app).post("/api/post/create", createPost).send({
      title: "new post",
      user_id: 2,
    });
    expect(post.body.title).toBe("new post");
  });
});

describe("delete post by id testing", () => {
  test("check response status code while delete existing post", async () => {
    const response = await request(app).delete("/api/posts/3", deletePost);
    expect(response.statusCode).toBe(200);
  });

  test("check user posts if user doesn't exist", async () => {
    const response = await request(app).delete("/api/posts/10", deletePost);
    expect(response.statusCode).toBe(404);
  });
});
