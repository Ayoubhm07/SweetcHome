import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from './Slides/Form';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Slides/Home';
import Register from './Slides/Register';
import Thanks from './Slides/Thanks';

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
          <Route path="/buysell" element={<Form />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/thanks" element={<Thanks />}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
