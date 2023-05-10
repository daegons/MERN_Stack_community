import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListDiv, ListItem } from "../../style/ListCSS";
import { Link } from "react-router-dom";

const List = (props) => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .post("/api/post/list")
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
            {/* post 클릭시 고유의 num page로 이동 */}
            <Link to={`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <p>{post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;
