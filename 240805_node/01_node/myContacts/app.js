const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");
const {
  getRegisterForm,
  postNewRegister,
  getLoginForm,
} = require("./controllers/registerController");

dbConnect();
app.set("view engine", "ejs");
app.set("views", "./myContacts/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./myContacts/public"));

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("getAll");
});

// app.get("/home", (req, res) => {
//   res.render("home").get(getLoginForm);
// });

// app.get("/register", (req, res) => {
//   res.render("register").get(getRegisterForm).post(postNewRegister);
// });

app.use("/contacts", require("./routes"));

app.listen(3000, () => {
  console.log("서버 실행 중");
});
