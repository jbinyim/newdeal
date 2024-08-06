const asyncHandler = require("express-async-handler");
const Register = require("../models/registerModel");
const bcrypt = require("bcrypt");

const getRegisterForm = (req, res) => {
  res.render("register");
};

const postNewRegister = asyncHandler(async (req, res) => {
  const { id, pw } = req.body;

  if (!id || !pw) {
    return res.status(400).send("필수값이 입력되지 않았습니다");
  }

  const hashedPw = await bcrypt.hash(pw, 10);

  const register = await Register.create({
    id,
    pw: hashedPw,
  });

  res.redirect("/contacts");
});

const getLoginForm = (req, res) => {
  res.render("home");
};

const postLogin = asyncHandler(async (req, res) => {
  const { loginId, loginPw } = req.body;

  if (!loginId || !loginPw) {
    return res.status(400).send("필수값이 입력되지 않았습니다");
  }

  const user = await Register.findOne({ id: loginId });

  if (!user || !(await bcrypt.compare(loginPw, user.pw))) {
    return res.status(401).send("아이디 또는 비밀번호가 잘못되었습니다.");
  }

  res.redirect("/contacts");
});

module.exports = { getRegisterForm, postNewRegister, getLoginForm, postLogin };
