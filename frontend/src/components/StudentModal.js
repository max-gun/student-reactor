import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class StudentModal extends React.Component {
    render() {
        const { students, show, handleClose } = this.props;

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Names</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {students.map(student => (
                            <li key={student.id}>{student.name}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default StudentModal;