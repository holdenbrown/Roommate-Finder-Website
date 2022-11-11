import React from "react";

class Directory extends React.Component {

    render() {
        return (
            <div className="container">
               <h1 id="heading">Roommify</h1>
               <div className="col-sm-12 d-flex justify-content-evenly">
                 <button type="button" class="btn btn-primary"  onClick={() => this.props.nextPage()}>Update Preferences</button>
               <button type="button" class="btn btn-primary">Update Preferences</button>
               </div>
             
            </div>
        )
    }
}

export default Directory;