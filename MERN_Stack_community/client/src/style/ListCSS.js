import styled from "@emotion/styled";

const ListDiv = styled.div`
  padding: 1rem 0px;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;
const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin: 5vh 0px;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
    0px 15px 12px rgba(0, 0, 0, 0.1);
  //Link태그  = a태그
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

export { ListDiv, ListItem };
