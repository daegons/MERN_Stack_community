import { Route, Routes } from 'react-router-dom';
import './App.css';

import Heading from './Component/Heading';

import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';
import List from './Component/Post/List';
import Edit from './Component/Post/Edit';

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
