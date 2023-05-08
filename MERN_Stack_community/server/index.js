//express를 불러와서
const express = require('express');
//npm i path --save설치 후
const path = require('path');
//app으로 상수 할당
const app = express();
//작업하는 포트와 겹처서 변경 3000 -> 5000
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
//서버 열고
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//기능 구성
//req 요청  클라이언트 -> 서버
//res 응답   반대
////코드 변경시 서버 재시작
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
