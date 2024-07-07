import React from 'react';
import axios from 'axios';
import config from '../configs/config';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const student = Object.fromEntries(formData.entries());
        
        try {
            console.log('sending saving request');
            const response = await axios.post(`${config.apiUrl}/students`, student);
            console.log('received response: ', response);
            e.target.reset();
        } catch (error) {
            console.error('Error saving student:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <h1 className="mb-4">Add Student</h1>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" name="name" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" name="email" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default StudentForm;