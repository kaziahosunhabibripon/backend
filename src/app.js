import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config({
  path: ".env",
});
const app = express();
app.use([
  cookieParser(),
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
  express.static("public"),

  express.json({
    limit: "16kb",
  }),
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
]);

// routes

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);
export { app };
