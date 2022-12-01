import DB from './db.json';
import React from "react";
import './App.css';

class Page2 extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="col-sm-12" id="page2">
                    <div className="col-sm-6 offset-sm-3">
                        <form>
                            <label htmlFor="customRange3" className="form-label">How school oriented are you (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How often do you like to go out (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How prone are you to break the law (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How much do you like to sleep (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How likley are you to drink and drive (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How adventrous are you (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How much will you be home (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How often do you wet the bed (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <label htmlFor="customRange3" className="form-label">How often do you wet the bed (1-3)</label>
                            <input type="range" className="form-range" min="0" max="2" step="1" id="customRange3" />
                            <button type="submit" className="btn btn-primary" onClick={(event) => {
                                event.preventDefault()
                                const inputs = document.getElementsByTagName("input")
                                let roomScore = 0;
                                for (let i = 0; i < inputs.length; i++) {
                                    roomScore += (inputs[i].valueAsNumber + 1)
                                }
                                console.log(roomScore)
                                let account;
                                for (let i = 0; i < DB.accounts.length; i++) {
                                    if (DB.accounts[i].id === localStorage.getItem("userID")) {
                                        account = DB.accounts[i];
                                        break;
                                    }
                                }
                                if (account.score === 0) {
                                    let value = DB.studentsAnswered[0].value + 1;
                                    let id = DB.studentsAnswered[0].id;
                                    let newEntry = { value, id }
                                    fetch('http://localhost:8000/studentsAnswered/' + (DB.studentsAnswered[0].id), {
                                        method: 'DELETE'
                                    }).then(() => {
                                        fetch('http://localhost:8000/studentsAnswered', {
                                            method: 'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify(newEntry)
                                        })
                                    });
                                }
                                account.score = roomScore;
                                fetch('http://localhost:8000/accounts/' + (account.id), {
                                    method: 'DELETE'
                                }).then(() => {
                                    fetch('http://localhost:8000/accounts', {
                                        method: 'POST',
                                        headers: {
                                            'Content-type': 'application/json'
                                        },
                                        body: JSON.stringify(account)
                                    })
                                });
                                this.props.previousPage(1)

                            }}
                            >Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Page2;