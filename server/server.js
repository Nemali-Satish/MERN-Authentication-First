import express from "express";

import cors from "cors";

import "dotenv/config";

import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

const port = process.env.PORT || 5000;

const allowedOrigins = ["http://localhost:5173"];

connectDB();

app.use(express.json());

app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
