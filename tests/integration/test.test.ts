import supertest from "supertest"
import app from "../../src/app"

import { closeConnection } from "../utils/database"

beforeEach(() => {
  /* Clear database tables */
})

afterAll(() => {
  closeConnection()
})

describe("GET/test", () => {
  it("Should return status code 200 and 'Hello world!'", async () => {
    const res = await supertest(app).get("/test")

    expect(res.status).toBe(200)
    expect(res.text).toBe("Hello world!")
  })
})