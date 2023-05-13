import styled from "@emotion/styled";
/* font-family: "Yeon Sung", cursive;
font-family: "Nanum Pen Script", cursive; 가장 아래 왼쪽부터 속성을 따름 */
const UploadDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  #title {
    border-radius: 6px;
    border: 1px solid #c6c6c6;
    margin-bottom: 10px;
    padding: 10px;
    font-family: "Nanum Pen Script";
    &:active,
    &:focus {
      outline: none;
    }
  }

  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 6px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    font-family: "Nanum Pen Script";
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: grey;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background: #c6c6c6;
      border-radius: 15px;
      /* margin-top: 87px;
      margin-bottom: 87px; */
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 10px;
    font-family: "Yeon Sung", cursive;
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 6px;
    padding: 5px 10px;
    background: rgb(73, 76, 84);
    color: white;
    border: none;
    font-family: "Yeon Sung", cursive;
    transition: all 0.4s;
    &:hover {
      background: rgb(35, 37, 41);
      color: white;
      border: none;
    }
    &.cancel {
      margin-right: 10px;
      border-radius: 6px;
      padding: 5px 10px;
      background: rgb(73, 76, 84);
      color: white;
      border: none;
      &:hover {
        background: rgb(35, 37, 41);
        color: white;
        border: none;
      }
    }
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };
