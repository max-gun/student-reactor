import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import EmailList from './components/EmailList';
import Navbar from './components/Navbar';

function App() {
  return (
        <div className='container'>
          <div class="row">
            <Navbar />
          </div>
          <div class="row">
            <StudentForm />
          </div>
          <div class="row">
            <div class="col">
              <StudentList />
            </div>
            <div class="col">
              <EmailList />
            </div>
          </div>
        </div>
  );
}

export default App;
