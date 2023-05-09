import { useState } from 'react';
import { UploadDiv, UploadForm, UploadButtonDiv } from '../../style/UploadCSS';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Upload = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      return alert('위 아래 위위 아래 채워주세요');
    }
    let body = {
      title: title,
      content: content,
    };

    axios
      .post('/api/post/submit', body)
      .then((res) => {
        if (res.data.success) {
          alert('글 작성이 완료되었습니다.✔');
          navigate('/');
        } else {
          alert('글 작성이 실패하였습니다.❌');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <UploadButtonDiv>
          <button onClick={onSubmit}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
