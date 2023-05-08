import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './component/List';
import Heading from './component/Heading';
import Upload from './component/Upload';
import { useState } from 'react';
function App() {
  const [contentList, setContentList] = useState([]);
  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/list"
          element={
            <List contentList={contentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/upload"
          element={
            <Upload contentList={contentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
