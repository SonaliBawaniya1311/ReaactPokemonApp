// import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

import Home from './Home';
import Pokemon from './Pokemon';

const App = () => {
//   const [dataSource,setdataSource]=useState(Array.from({length:20}));
//   const [hasMore,sethasMore]=useState(true)
//   const fetchMoreData=()=>{
//   setTimeout(()=>{
//     setdataSource(dataSource.concat(Array.from({length:20})))
//   },500);
// }


  return (
    <>
    {/* <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore}>
      {dataSource.map((item,index)=>{
          return <div> this is {index+1}</div>
        })
      }
    </InfiniteScroll> */}
    <Router >
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/pokemon/:name" element={<Pokemon/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;