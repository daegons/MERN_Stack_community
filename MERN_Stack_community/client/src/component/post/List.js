import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListDiv, ListItem } from '../../style/ListCSS';

const List = (props) => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((res) => {
        console.log([...res.data.postList]);
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {postList.map((post, i) => {
        return (
          <ListItem key={i}>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;
