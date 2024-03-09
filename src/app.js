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
export { app };
