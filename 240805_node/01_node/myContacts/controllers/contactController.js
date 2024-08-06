const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//각 요청별 구현해하는 함수 정의

// 전체 보기
const getAllContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find();
  res.render("index", { contact: contact });
});

// 새 연락처 폼
const getContactForm = (req, res) => {
  res.render("add");
};

// 새 연락처 추가하기
const postNewContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  // res.status(201).send(contact);
  res.redirect("/contacts");
});

// 연락처 상세보기
const getViewContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  // res.status(200).send(contact);
  res.render("update", { contact: contact });
});

// 연락처 수정하기
const putUpdateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  const { name, email, phone } = req.body;
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  contact.save();
  res.status(200).redirect("/contacts");
});

// 연락처 삭제하기
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  await Contact.deleteOne();
  // res.send("delete");
  res.redirect("/contacts");
});

module.exports = {
  getAllContacts,
  getContactForm,
  postNewContacts,
  getViewContact,
  putUpdateContact,
  deleteContact,
};
