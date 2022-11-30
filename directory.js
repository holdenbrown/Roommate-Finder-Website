import React from "react";
import DB from './db.json';
//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Directory extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 id="heading">Roommify</h1>
                <div className="col-sm-12 d-flex justify-content-evenly">
                    <button type="button" className="btn btn-primary" onClick={() => this.props.nextPage(1)}>Update Preferences</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.nextPage(2)}>View roommates</button>
                </div>
                <div className="row" id="row">
                    <div className="col-7">
                        <p>Available time used: {Math.floor(DB.timeUsed[DB.timeUsed.length - 1].value / 86400)}d {Math.floor((DB.timeUsed[DB.timeUsed.length - 1].value % 86400) / 3600)}hr {Math.floor((DB.timeUsed[DB.timeUsed.length - 1].value % 3600) / 60)}m {DB.timeUsed[DB.timeUsed.length - 1].value % 60}s of {DB.totalTime[0].value / 86400}d</p>
                    </div>
                    <div className="col-5">
                        <div className="progress" id="progressBar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" id="progress2" style={{ width: 300 * DB.timeUsed[DB.timeUsed.length - 1].value / DB.totalTime[0].value }}>{Math.round(100 * DB.timeUsed[DB.timeUsed.length - 1].value / DB.totalTime[0].value)}%</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;