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
                    <div className="col-12">
                        <p>Time left to answer survey: {Math.floor((DB.totalTime[0].value - DB.timeUsed[0].value) / 86400)}d {Math.floor(((DB.totalTime[0].value - DB.timeUsed[0].value) % 86400) / 3600)}hr {Math.floor(((DB.totalTime[0].value - DB.timeUsed[0].value) % 3600) / 60)}m {(DB.totalTime[0].value - DB.timeUsed[0].value) % 60}s</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;