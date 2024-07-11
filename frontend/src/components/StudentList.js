import React, { Component } from 'react';
import axios from 'axios';
import config from '../configs/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentModal from './StudentModal';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    fetchStudents = async () => {
        try {
            console.log('sending fetching request');
            const response = await axios.get(`${config.apiUrl}/students`);
            console.log('received response: ', response);
            this.renderStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    renderStudents = (students) => {
        const studentList = document.getElementById('student-list');
        studentList.innerHTML = students.map(student => 
            `<li class="list-group-item" key="${student.id}">${student.name} (${student.email})</li>`
        ).join('');
    };

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <h1>Student List</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={this.fetchStudents} className="btn btn-secondary mb-3">fetch Students</button>
                    </div>
                    <div class="col">
                        <button onClick={this.handleShowModal} className="btn btn-primary mb-3">Show Student Names</button>
                    </div>
                </div>
                <div className="row">
                <ul id="student-list" className="list-group"></ul>
                
                <StudentModal
                    students={[]}
                    show={this.state.showModal}
                    handleClose={this.handleCloseModal}
                />
                </div>
            </div>
        );
    }
}

export default StudentList;