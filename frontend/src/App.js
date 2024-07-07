import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import Navbar from './components/Navbar';

function App() {
  return (
        <div>
          <Navbar />
          <StudentForm />
          <StudentList />
        </div>
  );
}

export default App;
