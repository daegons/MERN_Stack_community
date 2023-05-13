import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const ImageUpload = (props) => {
  /*
  1.사용자가 이미지를 업로드
  2.업로드한 이미지를 받아서 서버에 저장
  3.저장한 이미지의 경로를 다시 클라에게 전송
  4.경로를 받아서 post model에 저장
  */

  const FileUpload = (e) => {
    // console.log(e.target.files[0]);
    var formData = new FormData(); //{}
    formData.append('file', e.target.files[0]); //XMLHtpRequest
    //콘솔로 formData 찍으면 빈 오브젝트로 출력// {}
    //for문으로 콘솔 찍어야 보임..
    // for (const keyValu of formData) console.log(keyValu);
    axios
      .post('/api/post/image/upload', formData)
      .then((res) => {
        // console.log(res.data);
        props.setImage(res.data.filePath);
      })
      .catch(() => {});
  };

  return (
    <div style={{ fontFamily: 'Yeon Sung' }}>
      {/* accept="image/* 이미지들만 관리 */}
      <Form.Control
        onChange={FileUpload}
        type="file"
        className="shadow-none"
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;
