import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login'
import Landing from './components/Landing'
import Result from './components/Result'
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
   <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Register' element={<Register/>}/>
          <Route exact path='/Landing' element={<Home/>}/>
          <Route exact path='/Result' element={<Landing/>}/>
        </Routes>  
   </Router>
  );
}

export default App;
