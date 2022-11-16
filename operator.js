import React from "react";


class Operator extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 id="heading">Roommify</h1>
                <h4>Operator View</h4>
                <div className="col-12">
                    <button type="button" className="btn btn-primary" onClick={() => this.props.nextPage(1)}>View Completion Progress</button>
                    <button type="button" className="btn btn-primary">Create Pairings</button>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-primary"><p>New Selection</p>(Complete current selection first)</button>
                </div>
            </div>
        )
    }
}

export default Operator;