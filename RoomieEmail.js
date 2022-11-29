import React from "react";
import DB from './db.json';

class RoomieEmail extends React.Component{
    displayRoomies = () => {
        const roomies = DB.accounts.map(el => {
            if (Math.abs(el.score - localStorage.getItem("roomScore") <= 3)){
                console.log(el.name);
               return (<li>{el.name}</li>)
            }
            
        })
        return (
            <ul>{roomies}</ul>
        )
    }
    render(){
        return(
            <div>
                <div className="container">
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Roomates that you would have a good experience with</h1>
                            {this.displayRoomies()}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
export default RoomieEmail;