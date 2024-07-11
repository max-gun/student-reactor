import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import EmailList from './components/EmailList';
import Navbar from './components/Navbar';
import Headline from './components/Headline';

function App() {
  return (
        <div className='container'>
          <div className="row">
            <Navbar />
            <Headline title='Student Management System'/>
          </div>
          <div className="row">
            <StudentForm studentName="Doron"/>
          </div>
          <div className="row">
            <div className="col">
              <StudentList />
            </div>
            <div className="col">
              <EmailList />
            </div>
          </div>
        </div>
  );
}

export default App;
