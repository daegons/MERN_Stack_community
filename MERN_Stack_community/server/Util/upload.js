const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'sF9aw8thFxZ3jNadwZDp';
const secret_key = 'oQBl2aaGHatyzYUkHjlK17WZlVzwWrPBMIzBPtnx';

//네이버 클라우드 카피
const S3 = new AWS.S3({
  endpoint: endpoint,
  region: region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

function setUpload(bucket) {
  //multer s3에서 카피
  const upload = multer({
    storage: multerS3({
      s3: S3,
      bucket: bucket,
      //acl 보안규칙(공개범위?)
      acl: 'public-read-write',
      key: function (req, file, cb) {
        //extname()확장자명만 제거해서 파일 이름만 남겨줌
        let extension = path.extname(file.originalname);
        cb(null, Date.now().toString() + extension);
      },
    }),
  }).single('file');
  return upload;
}

module.exports = setUpload;
