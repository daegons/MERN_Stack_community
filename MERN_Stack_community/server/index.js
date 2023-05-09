//express를 불러와서
const express = require("express");
//npm i path --save설치 후
const path = require("path");

const mongoose = require("mongoose");

//app으로 상수 할당
const app = express();
//작업하는 포트와 겹처서 변경 3000 -> 5000
const port = 5000;

//몽고DB 연결코드
//mongodb+srv://qzom1425:thdeorhSSqzom~142536@cluster0.73hfjuf.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, "../client/build")));

//body안읽히는거 아래 추가해서 해결
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//서버 열고
app.listen(port, () => {
  //몽고DB와 연결
  mongoose
    .connect(
      "mongodb+srv://qzom1425:thdeorhSSqzom~142536@cluster0.73hfjuf.mongodb.net/?retryWrites=true&w=majority"
    ) //정상 연결 되면 .then으로...
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("몽고DB와 연결중..");
    }) //연결 불가시 .catch로....
    .catch((err) => {
      console.log(`${err} 에러 발생~!!`);
    });
});

//기능 구성
//req 요청  클라이언트 -> 서버
//res 응답   반대
////코드 변경시 서버 재시작

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
//  * = 은 모든 것을 의미함
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, text: "집가고싶다" });
});

//데이터 베이스 연결 위해서
//몽고 DB로 구축
//몽고DB 0.0.0.0/0  모든 ip접속 허용

//CORS 이슈
//브라우저에서 리소스를 허용하려 할 때 다른 포트에서 온 정보들에 대해 보안적인 규칙을 지켜야한다.
