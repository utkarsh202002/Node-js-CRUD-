import logo from './logo.svg';
import './App.css';
import Create from './Component/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Component/Read.js"
import Update from './Component/Update';
function App() {

  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Create/>}></Route>
      <Route exact path="/read" element={<Read/>}></Route>
      <Route exact path="/update" element={<Update/>}></Route>


    </Routes>




    </BrowserRouter>

    </>
    
  );
}

export default App;
