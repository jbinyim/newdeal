// src/server.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // JSON 요청 본문 파싱

// MongoDB 연결
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// 기본 라우트
app.use("/api", userRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.static(path.join(__dirname, "../fe/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../fe/build/index.html"));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
