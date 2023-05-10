//express를 불러와서
const express = require('express');
//npm i path --save설치 후
const path = require('path');

const mongoose = require('mongoose');

//app으로 상수 할당
const app = express();
//작업하는 포트와 겹처서 변경 3000 -> 5000
const port = 5000;

//몽고DB 연결코드
//mongodb+srv://qzom1425:thdeorhSSqzom~142536@cluster0.73hfjuf.mongodb.net/?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, '../client/build')));

//body안읽히는거 아래 추가해서 해결
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require('./model/Post');
const { Counter } = require('./model/Counter');

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
      console.log(`${err} 에러 발생~!!`);
    });
});

//기능 구성
//req 요청  클라이언트 -> 서버
//res 응답   반대
////코드 변경시 서버 재시작

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//  * = 은 모든 것을 의미함
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/post/submit', (req, res) => {
  //temp에 title,content 들어있음..
  const temp = req.body;

  Counter.findOne({ name: 'counter' })
    .exec()
    .then((counter) => {
      console.log(counter);
      temp.postNum = counter.postNum;
      const CommunityPost = new Post(temp);
      CommunityPost.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});

app.post('/api/post/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});

app.post('/api/post/detail', (req, res) => {
  // console.log(req.body.postNum); //post id 출력
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
      console.log(err);
    });
});
app.post('/api/post/edit', (req, res) => {
  const temp = {
    title: req.body.title,
    content: req.body.content,
  };
  // console.log(req.body.postNum); //post id 출력
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
//데이터 베이스 연결 위해서
//몽고 DB로 구축
//몽고DB 0.0.0.0/0  모든 ip접속 허용

//CORS 이슈
//브라우저에서 리소스를 허용하려 할 때 다른 포트에서 온 정보들에 대해 보안적인 규칙을 지켜야한다.
