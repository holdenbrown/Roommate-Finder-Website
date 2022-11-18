import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Directory extends React.Component {

    render() {
        return (
            <div className="container">
               <h1 id="heading">Roommify</h1>
               <div className="col-sm-12 d-flex justify-content-evenly">
                <button type="button" className="btn btn-primary"  onClick={() => this.props.nextPage(1)}>Update Preferences</button>
                <button type="button" className="btn btn-primary" onClick={() => this.props.nextPage(4)}>View roommates</button>
               </div>
             
            </div>
        )
    }
}

export default Directory;