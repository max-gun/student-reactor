import React, { Component } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import EmailList from "../components/EmailList";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExtended : true
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <StudentForm/>
                </div>
                {this.state.isExtended &&
                    (<div className="row">
                        <div className="col">
                            <StudentList />
                        </div>
                        <div className="col">
                            <EmailList />
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Home;