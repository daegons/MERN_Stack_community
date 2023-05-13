const express = require('express');
const multer = require('multer');
const router = express.Router();

const { Post } = require('../Model/Post');
const { Counter } = require('../Model/Counter');

const setUpload = require('../Util/upload');

router.post('/submit', (req, res) => {
  //temp에 title,content 들어있음..
  let temp = req.body;

  Counter.findOne({ name: 'counter' })
    .exec()
    .then((counter) => {
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

router.post('/list', (req, res) => {
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

router.post('/detail', (req, res) => {
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

router.post('/edit', (req, res) => {
  let temp = {
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

router.post('/delete', (req, res) => {
  // console.log(req.body.postNum); //post id 출력
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

/*
//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
//

const upload = multer({ storage: storage }).single('file');

router.post('/image/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});
*/

router.post(
  '/image/upload',
  setUpload('react-project/post'),
  (req, res, next) => {
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
