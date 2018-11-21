const supertest = require("supertest");
const assert = require("assert");
const app = require("../index");

describe("GET /", () => {
  it("it should has status code 200", done => {
    supertest(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        done();
      });
  });

  it("it shoud has response with hope key with value of loop", done => {
    supertest(app)
      .get("/")
      .expect({ hope: "loop" })
      .end((err, res) => {
        if (err) done(err);
        done();
      });
  });

  describe("POST /", () => {
    it("it shoud return status code 200 is name exists", done => {
      supertest(app)
        .post("/")
        .send('{ "name": "Hope" }')
        .end((err, res) => {
          if (err) done(err);
          done();
        });
    });
  });
});
