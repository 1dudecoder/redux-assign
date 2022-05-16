import { useState } from 'react'
import { setproducts } from './action/Action'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {useDispatch , useSelector} from "react-redux"
import Rating from './components/Rating';
import PdfDown from './components/PdfDown';

function App() {

  const dispatch = useDispatch();
  const product_val = useSelector(state => state.allproducts.products)

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Rating />} />
          <Route exact path="/pdf-page" element={<PdfDown />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
