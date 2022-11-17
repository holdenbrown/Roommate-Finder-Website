import React from "react";
import './operator.css';


class Operator extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 id="heading">Roommify</h1>
                <h4>Operator View</h4>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" id="opButtons" onClick={() => this.props.nextPage(1)}><p>View Completion Progress</p></button>
                    <button type="button" className="btn btn-primary" id="opButtons"><p>Create Pairings</p></button>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary disabled" id="opButtons"><p>New Selection</p>(Complete current selection first)</button>
                </div>
            </div>
        )
    }
}

export default Operator;
