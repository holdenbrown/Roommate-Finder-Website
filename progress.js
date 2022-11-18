import React from "react";
import DB from './db.json';
import './progress.css';


class Progress extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 id="heading">Roommify</h1>
                <h4>Operator View</h4>
                <div className="row" id="row">
                    <div className="col-6">
                        <p>Students answered: {DB.studentsAnswered} out of {DB.totalStudents}</p>
                    </div>
                    <div className="col-6">
                        <div className="progress" id="progressBar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" id="progress1" style={{ width: 300 * DB.studentsAnswered / DB.totalStudents }}>{Math.round(100 * DB.studentsAnswered / DB.totalStudents)}%</div>
                        </div>
                    </div>
                </div>
                <div className="row" id="row">
                    <div className="col-6">
                        <p>Available time used: {Math.floor(DB.timeUsed / 86400)}d {Math.floor((DB.timeUsed % 86400) / 3600)}hr {Math.floor((DB.timeUsed % 3600) / 60)}m {DB.timeUsed % 60}s of {DB.totalTime / 86400}d</p>
                    </div>
                    <div className="col-6">
                        <div className="progress" id="progressBar">
                            <div className="progress-bar progress-bar-striped" id="progress2" style={{ width: 300 * DB.timeUsed / DB.totalTime }}>{Math.round(100 * DB.timeUsed / DB.totalTime)}%</div>
                        </div>
                    </div>
                    <button className="btn btn-primary" id="return" onClick={() => this.props.previousPage(1)}><p>Return Home</p></button>
                </div>
            </div>
        )
    }
}

export default Progress;