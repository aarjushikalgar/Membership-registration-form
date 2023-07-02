
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Listview from './components/listview';
function App() {
const [arr,setArr] = useState([]);
  return (
    <div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element ={<Register arr = {arr} setArr = {setArr}></Register>}> 
  </Route>
  <Route path='/components/listview'  element ={ <Listview arr = {arr} /> }></Route>
  </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
