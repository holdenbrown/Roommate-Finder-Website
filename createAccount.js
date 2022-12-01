import React from "react"; import DB from './db.json';

class CreateAccount extends React.Component {

    verify() {
        let name = document.getElementById('exampleInputName1');
        let email = document.getElementById('exampleInputEmail1');
        let password = document.getElementById('exampleInputPassword1');
        let validName = true;
        let validEmail = true;
        let validPassword = true;
        if (name.value === '') {
            validName = false;
        }
        if (email.value === '') {
            validEmail = false;
        }
        if (password.value === '') {
            validPassword = false;
        }
        name.classList.remove('is-valid');
        name.classList.remove('is-invalid');
        email.classList.remove('is-valid');
        email.classList.remove('is-invalid');
        password.classList.remove('is-valid');
        password.classList.remove('is-invalid');
        if (validName) {
            name.classList.add('is-valid');
        } else {
            name.classList.add('is-invalid');
        }
        if (validEmail) {
            email.classList.add('is-valid');
        } else {
            email.classList.add('is-invalid');
        }
        if (validPassword) {
            password.classList.add('is-valid');
        } else {
            password.classList.add('is-invalid');
        }
        if (validEmail && validPassword && validName) {
            name = name.value;
            email = email.value;
            password = password.value
            let id = 'B' + Math.round(((Math.random() * 89999) + 10000)).toString();
            let idAvailable = false;
            while(!idAvailable) {
                idAvailable = true; // eslint-disable-next-line
                DB.accounts.forEach(element => {
                    if (element.id === id) {
                        idAvailable = false;
                    }
                })
                if (!idAvailable) {
                    id = 'B' + Math.round(((Math.random() * 89999) + 10000)).toString();
                }
            }
            let score = 0;
            let newAccount = { id, name, email, password, score }
            fetch('http://localhost:8000/accounts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newAccount)
            }).then(this.props.previousPage(1));
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1 id="heading">Roommify</h1>
                        <h4>Create Account</h4>

                        <form className="needs-validation" id="form" noValidate>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputName1" className="form-label">First and last name</label>
                                <input type="name" className="form-control" id="exampleInputName1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Required field
                                </div>
                            </div>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Required field
                                </div>
                            </div>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Required field
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => this.verify()}>Create Account</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>

            </div>
        )
    }
}

export default CreateAccount;