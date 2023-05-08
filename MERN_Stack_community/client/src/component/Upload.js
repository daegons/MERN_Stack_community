import { useEffect, useState } from 'react';

const Upload = (props) => {
  const [content, setContent] = useState('');

  const onSubmit = () => {
    let List = [...props.contentList];
    List.push(content);
    props.setContentList([...List]);
    setContent('');
  };

  useEffect(() => {
    //컴포넌트 마운트 되었을 때
    alert('upload 컴포넌트 나타남');
    return () => {
      //컴포넌트 사망 할 때 실행 될 코드..
      alert('upload 컴포넌트 죽음');
    };
  }, [
    /*useEffect가 실행 될 조건 빈배열이면 한번만 실행..*/
    props.contentList,
  ]);

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Upload;
