import About from "./component/About";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Sigup from "./component/Signup";
import Products from "./component/Products";
// import './App.css'

function App() {
  

  return (
    <BrowserRouter>
     <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path="/signup" element={<Sigup/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Products' element={<Products/>}></Route>
    </Routes>
 </BrowserRouter>

  )
}

export default App
