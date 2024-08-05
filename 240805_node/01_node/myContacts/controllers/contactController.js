const asyncHandler = require("express-async-handler");

//각 요청별 구현해하는 함수 정의

// 전체 보기
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기
const postNewContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  res.status(201).send("New Create Contacts Page");
});

// 연락처 상세보기
const getViewContact = asyncHandler(async (req, res) => {
  res.status(200).send(`View Page ID: ${req.params.id}`);
});

// 연락처 수정하기
const putUpdateContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Update Page ID: ${req.params.id}`);
});

// 연락처 삭제하기
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).send(`Delete Page ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  postNewContacts,
  getViewContact,
  putUpdateContact,
  deleteContact,
};
