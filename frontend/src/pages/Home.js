import React from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import EmailList from "../components/EmailList";

const Home = () => {
    return (
        <div>
            <div className="row">
                <StudentForm/>
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

export default Home;