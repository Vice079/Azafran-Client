import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from "react-router"
import {Login} from "../src/pages/Login/Login.page"
import {Register} from "../src/pages/Register/Register.page"
import {Ingredients} from "../src/pages/Ingredients/Ingredients.page"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
