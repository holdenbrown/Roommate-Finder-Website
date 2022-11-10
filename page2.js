import React from "react";

class Page2 extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 onClick={() => this.props.previousPage()}>click me to go back</h1>
            </div>
        )
    }
}

export default Page2;