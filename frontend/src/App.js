import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Navbar from './components/Navbar';
import Headline from './components/Headline';

function App() {
  return (
    <Router>
        <div className='container'>
          <div className="row">
            <Navbar />
            <Headline title='Student Management System'/>
          </div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/map' element={<Map/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
