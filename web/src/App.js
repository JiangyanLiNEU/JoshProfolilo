import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/Home";
import { Teaching } from './Components/Teaching';
import {Math} from './Components/Math';
import {CS} from './Components/CS';

import {Hobby} from './Components/Hobby'
import {BrowserRouter,Routes,Route, HashRouter, Switch} from 'react-router-dom';
import React from "react";

export const App = () => {
  return (
    
      <div>
      <br/>
      <NavBar/>
      <br />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Teaching' element={<Teaching/>}></Route>
          <Route path='/CS' element={<CS/>}></Route>
          <Route path='/Math' element={<Math/>}></Route>
          <Route path='/Hobbies' element={<Hobby/>}></Route>
        </Routes>



      {/* <React.StrictMode>
        <HashRouter>
        {/* <Route path='/' element={<Home/>}></Route>
          <Route path='/Teaching' element={<Teaching/>}></Route>
          <Route path='/CS' element={<CS/>}></Route>
          <Route path='/Math' element={<Math/>}></Route>
          <Route path='/Hobbies' element={<Hobby/>}></Route> */}
        {/* </HashRouter>
      </React.StrictMode> */}
{/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Teaching' element={<Teaching/>}></Route>
          <Route path='/CS' element={<CS/>}></Route>
          <Route path='/Math' element={<Math/>}></Route>
          <Route path='/Hobbies' element={<Hobby/>}></Route>
        </Routes>
      </BrowserRouter>  */}
      </div>
    
  );
};
