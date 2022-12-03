import React from "react";
import DB from './db.json';

class RoomieEmail extends React.Component{
    displayRoomies = () => {
        let i;
        for (i = 0; i < DB.accounts.length; i++) {
            if (DB.accounts[i].id === localStorage.getItem("userID")) {
                break;
            }
        } // eslint-disable-next-line
        const roomies = DB.accounts.map(el => {
            if (Math.abs(el.score - DB.accounts[i].score) <= 3 && el.id !== DB.accounts[i].id){
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
