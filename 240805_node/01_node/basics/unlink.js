// 파일 삭제하기

const fs = require("fs");

if (!fs.existsSync("./text.txt")) {
  console.log("파일이 존재하지 않습니다.");
} else {
  fs.unlinkSync("./text.txt");
  console.log("파일이 삭제되었습니다.");
}
