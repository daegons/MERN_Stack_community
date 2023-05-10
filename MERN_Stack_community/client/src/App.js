import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./component/post/List";
import Heading from "./component/Heading";
import Upload from "./component/post/Upload";

import Detail from "./component/post/Detail";
import Edit from "./component/post/Edit";
function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
