import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import { Route,Routes ,BrowserRouter} from 'react-router-dom';
import Submit from './components/Submit';

import { useState } from 'react';

function App() {


     const[user,setUser]=useState({name:'',birthday:'',email:''})
 
  return (
    //  <Login/>
 
 <BrowserRouter>
 <Routes>
  
 <Route path='/' element={<Login />}/>
  <Route path='/submit' element={<Submit/>}/>

  </Routes>
  </BrowserRouter>

  

 
  );
}

export default App;

