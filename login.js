import React from "react"; import DB from './db.json';

class Login extends React.Component {

    verify() {
        let email = document.getElementById('exampleInputEmail1');
        let password = document.getElementById('exampleInputPassword1');
        let emailFound = false;
        let passwordFound = false;
        DB.accounts.forEach(element => {
            emailFound = false;
            passwordFound = false;
            if (element.email === email.value) {
                emailFound = true;
            }
            if (element.password === password.value) {
                passwordFound = true;
            }
            if (emailFound && passwordFound) {
                if (element.id.charAt(0) === 'A') {
                    this.props.nextPage(3);
                } else {
                    this.props.nextPage(1);
                }
            }
        });
        if (email.classList.contains('is-valid')) {
            email.classList.remove('is-valid');
        }
        if (email.classList.contains('is-invalid')) {
            email.classList.remove('is-invalid');
        }
        if (password.classList.contains('is-valid')) {
            password.classList.remove('is-valid');
        }
        if (password.classList.contains('is-invalid')) {
            password.classList.remove('is-invalid');
        }
        if (!emailFound) {
            email.classList.add('is-invalid');
        } else {
            email.classList.add('is-valid');
        }
        if (!passwordFound) {
            password.classList.add('is-invalid');
        } else {
            password.classList.add('is-valid');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1 id="heading">Roommify</h1>

                        <form className="needs-validation" id="form" noValidate>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Incorrect email
                                </div>
                            </div>
                            <div className="mb-3 needs-validation">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Incorrect password
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={() => this.verify()}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>

            </div>
        )
    }
}

export default Login;
