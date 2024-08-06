// src/routes/userRoutes.ts
import express from "express";
import User, { IUser } from "../models/User";

const router = express.Router();

// 사용자 등록
router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser: IUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
});

// 모든 사용자 조회
router.get("/users", async (req, res) => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

export default router;
