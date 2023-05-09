import React, { useEffect, useState } from "react";
import axios from "axios";
const List = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    //클라이언트 --> 데이터 전송 --> 서버
    const body = {
      text: "안늉",
    };
    axios
      .post("/api/test", body)
      .then((res) => {
        //성공 핸들링
        setText(res.data.text);
        console.log(res);
        console.log(`요청 성공`);
      })
      .catch((err) => {
        //에러 핸들링

        console.log(err);
        console.log(`요청 실패`);
      });
    // .then(() => {
    //   //항상 실행되는 영역
    // });
  }, []);

  return (
    <div>
      <h1>List</h1>
      <h2>{text}</h2>
      {props.contentList.map((list, i) => {
        return <li key={i}>{list}</li>;
      })}
    </div>
  );
};

export default List;
