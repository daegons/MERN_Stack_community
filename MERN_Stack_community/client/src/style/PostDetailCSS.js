import styled from '@emotion/styled';

const PostDiv = styled.div`
  padding: 1rem 0px;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 30px 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  h2 {
    font-weight: bold;
    font-family: 'Yeon Sung', cursive;
  }
  p {
    margin-bottom: 0px;
    font-family: 'Nanum Pen Script';
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 6px;
    padding: 5px 10px;
    background: rgb(73, 76, 84);
    color: white;
    border: none;
    font-family: 'Yeon Sung', cursive;
    transition: all 0.4s;
    &:hover {
      background: rgb(35, 37, 41);
      color: white;
      border: none;
    }
    &.delete {
      margin-left: 10px;
      &:hover {
        background: rgb(35, 37, 41);
        color: white;
      }
    }
  }
`;

export { PostDiv, SpinnerDiv, Post, BtnDiv };
