import express, { Request, Response } from "express"
import cors from "cors"

import "reflect-metadata"
import "./setup"

import connect from "./database/connection"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Hello world!")
})

export async function connectDatabase() {
  await connect()
}

export default app