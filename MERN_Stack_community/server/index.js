//require바닥에 ...뜨는거 관련 https://hini7.tistory.com/226#toc-%ED%98%B8%ED%99%98
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
//이미지 사용 경로 지정
app.use('/image', express.static('./image'));
//body안읽히는거 아래 추가해서 해결
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post.js 분리시킨거 사용
app.use('/api/post', require('./Router/post'));

//서버 열고
app.listen(port, () => {
  //몽고DB와 연결
  mongoose
    .connect(
      'mongodb+srv://qzom1425:thdeorhSSqzom~142536@cluster0.73hfjuf.mongodb.net/Community?retryWrites=true&w=majority'
    ) //정상 연결 되면 .then으로...
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log('몽고DB와 연결중..');
    }) //연결 불가시 .catch로....
    .catch((err) => {
      console.log(err);
    });
});
//서로 다른 포트끼리 연결하면 cors이슈 발생..

//req 클라 -> 서버에 보내는 요청
//res 서버 -> 클라에 보내는 응답
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//  * = 은 모든 것을 의미함
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
