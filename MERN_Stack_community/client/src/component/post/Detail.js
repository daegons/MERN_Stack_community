import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
//아래 두개 스피너
import Loading from './../assets/Spinner';
import Loading1 from '../assets/Loading';
import { BtnDiv, Post, PostDiv } from '../../style/PostDetailCSS';

const Detail = () => {
  const [postDetil, setPostDetail] = useState({});
  const [loaded, setLoaded] = useState(false);
  //현재 페이지 id 때문..
  const params = useParams();
  useEffect(() => {
    // console.log(params.postNum); //post id값 ex)1
    const body = {
      //let body =
      postNum: params.postNum,
    };
    axios
      .post('/api/post/detail', body)
      .then((res) => {
        if (res.data.success) {
          setTimeout(() => {
            setPostDetail(res.data.post);
            setLoaded(true);
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(postDetil);
  }, [postDetil]);

  return (
    <PostDiv>
      {loaded ? (
        <>
          <Post>
            <h2>{postDetil.title}</h2>
            <p>{postDetil.content}</p>
          </Post>
          <BtnDiv>
            <Link to={`/edit/${postDetil.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <Link>
              <button className="delete">삭제</button>
            </Link>
          </BtnDiv>
        </>
      ) : (
        // <Loading /> //1스피너
        <Loading1 /> //2스피너
      )}
    </PostDiv>
  );
};

export default Detail;
