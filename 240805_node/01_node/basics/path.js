// path 모듈 연습하기

const path = require("path");
const parsePath = path.parse(__filename);
const filename = path.basename(__filename);
const ex = path.extname(__filename);

console.log(filename);
console.log(ex);
