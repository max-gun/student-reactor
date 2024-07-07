import React from 'react';
import axios from 'axios';
import config from '../configs/config';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
    const fetchStudents = async () => {
        try {
            console.log('sending fetching request');
            const response = await axios.get(`${config.apiUrl}/students`);
            console.log('received response: ', response);
            renderStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const renderStudents = (students) => {
        const studentList = document.getElementById('student-list');
        studentList.innerHTML = students.map(student => 
            `<li class="list-group-item" key="${student.id}">${student.name} (${student.email})</li>`
        ).join('');
    };

    return (
        <div className="container mt-4">
            <h1>Student List</h1>
            <button onClick={fetchStudents} className="btn btn-secondary mb-3">Refresh</button>
            <ul id="student-list" className="list-group"></ul>
        </div>
    );
};

export default StudentList;