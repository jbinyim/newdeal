// HTTP 모듈로 서버 만들고 실행하기

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);

  const method = req.method.toLowerCase(); // 메서드를 소문자로 변환
  const url = req.url; // 요청 URL

  if (method === "get" && url === "/") {
    res.end("node server");
  } else if (method === "get" && url === "/home") {
    res.end("home");
  } else if (method === "get" && url === "/about") {
    res.end("about");
  } else {
    res.statusCode = 404;
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("서버 실행 중");
});
