const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactForm,
  postNewContacts,
  getViewContact,
  putUpdateContact,
  deleteContact,
} = require("./controllers/contactController");
const {
  getRegisterForm,
  postNewRegister,
  getLoginForm,
  postLogin,
} = require("./controllers/registerController");

// 모든 연락처 가져오기
// 새 연락처 추가하기
router.route("/").get(getAllContacts);

router.route("/add").get(getContactForm).post(postNewContacts);

router.route("/register").get(getRegisterForm).post(postNewRegister);

router.route("/login").get(getLoginForm).post(postLogin);
// 연락처 상세보기
// 연락처 수정하기
// 연락처 삭제하기
router
  .route("/:id")
  .get(getViewContact)
  .put(putUpdateContact)
  .delete(deleteContact);

module.exports = router;
