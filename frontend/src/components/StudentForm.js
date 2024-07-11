import React from 'react';
import axios from 'axios';
import config from '../configs/config';
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formTitle : 'Add',
            buttonName : 'Submit',
            isDeleteMode : false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.state.isDeleteMode){
            this.deleteStudent(event);
        } else {
            this.addStudent(event);
        }
    };

    addStudent = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const student = Object.fromEntries(formData.entries());
        
        try {
            console.log('sending saving request');
            const response = await axios.post(`${config.apiUrl}/students`, student);
            console.log('received response: ', response);
            event.target.reset();
        } catch (error) {
            console.error('Error saving student:', error);
        }
    }

    deleteStudent = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(Object.fromEntries(formData.entries()));
    }

    changeMode() {
        this.setState(prevState => ({
            formTitle : prevState.isDeleteMode ? 'Add' : 'Delete',
            buttonName : prevState.isDeleteMode ? 'Submit' : 'Remove',
            isDeleteMode : !prevState.isDeleteMode
        }));
    }

    extendForm() {
        
    }

    render() {
        return (
            <div className='row'>
                <form className="container col mt-4" onSubmit={this.handleSubmit}>
                    <h3 className="mb-4">{this.state.formTitle} Student</h3>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" name="name" className="form-control" />
                    </div>
                    {!this.state.isDeleteMode ? (
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" name="email" className="form-control" />
                    </div>)
                    : (<p>Be careful when deleting - don't truncate or drop tables</p>)
                    }
                    <button type="submit" className="btn btn-primary">{this.state.buttonName}</button>
                </form>
                <div className='col'>
                    <div className='row'>
                        <button className='btn btn-primary btn-lg'
                        role='button' aria-disabled="true"
                        onClick={this.changeMode.bind(this)}
                        style={{backgroundColor: this.state.isDeleteMode ? 'red' : 'green',
                                color: this.state.isDeleteMode ? 'orange' : 'black'
                        }}>
                            Change Mode to {this.state.isDeleteMode ? 'Add' : 'Delete'}
                        </button>
                    </div>
                    <div className='row'>
                        <button className='btn btn-primary btn-lg'
                        role='button' aria-disabled="true"
                        onClick={this.extendForm.bind(this)}>
                            Extend Form
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default StudentForm;