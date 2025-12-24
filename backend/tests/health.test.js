const request = require("supertest");

function ensureTestEnv() {
  process.env.DATABASE_URL =
    process.env.DATABASE_URL ||
    "postgresql://user:pass@localhost:5432/testdb?schema=public";
  process.env.JWT_SECRET = process.env.JWT_SECRET || "test-secret";
  process.env.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "x";
  process.env.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "x";
  process.env.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "x";
  process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || "x";
  process.env.SMTP_FROM = process.env.SMTP_FROM || "noreply@example.com";
}

describe("health endpoints", () => {
  let app;

  beforeAll(() => {
    ensureTestEnv();
    const { createApp } = require("../src/app");
    app = createApp();
  });

  it("returns ok from /api/health", async () => {
    const res = await request(app).get("/api/health").expect(200);

    expect(res.body.status).toBe("ok");
    expect(res.body).toHaveProperty("time");
    expect(res.body).toHaveProperty(["cloudinary", "configured"]);
  });

  it("returns upload health", async () => {
    const res = await request(app).get("/api/uploads/health").expect(200);

    expect(res.body).toHaveProperty("cloudinaryConfigured");
  });
});
