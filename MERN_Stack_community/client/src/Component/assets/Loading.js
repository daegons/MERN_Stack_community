// Loading.js
import React from 'react';
import { Background } from './LoadingCSS';
import Spiner from './spiner.gif';
const Loading = () => {
  return (
    <Background>
      <img src={Spiner} alt="로딩중" width="6%" />
      {/* <LoadingText>로딩중</LoadingText> */}
    </Background>
  );
};

export default Loading;
