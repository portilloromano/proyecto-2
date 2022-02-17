const request = require("supertest");
const app = require("../index");

it("response with json containing a list of all phrases", (done) => {
    request(app)
        .get("/phrases")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
});

it("response with json containing phrase with id 1", (done) => {
    request(app)
        .get("/phrases/1")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({
            data: [
                {
                    id: 1,
                    phrase: "No temo las computadoras. Temo la falta de ellas.",
                    author: "Isaac Asimov",
                    created_at: null,
                    updated_at: null,
                },
            ],
        })
        .end(done);
});

it("response with json containing a random phrase", (done) => {
    request(app)
        .get("/random")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
});
