import React from 'react';
import axios from 'axios';
import config from '../configs/config';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailList = () => {
    const fetchEmails = async () => {
        try {
            console.log('sending fetching request');
            const response = await axios.get(`${config.apiUrl}/students`);
            console.log('received response: ', response);
            renderEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
    };

    const renderEmails = (students) => {
        const emailList = document.getElementById('email-list');
        emailList.innerHTML = students.map(student => 
            `<li class="list-group-item" key="${student.id}">${student.email}</li>`
        ).join('');
    };

    return (
        <div className="container mt-4">
            <h1>Email List</h1>
            <button onClick={fetchEmails} className="btn btn-secondary mb-3">Refresh</button>
            <ul id="email-list" className="list-group"></ul>
        </div>
    );
};

export default EmailList;