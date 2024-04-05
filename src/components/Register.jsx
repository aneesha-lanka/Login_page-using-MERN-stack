import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
const Register = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user,[name]:value })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password } = user;
        try {
            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            console.log(res.status);
            if (res.status === 400 || !res) {
                window.alert("Already Used Details");
            } else {
                window.alert("Registered Successfully");
                history.push('/login');
            }

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
                    <div className="col-md-5 d-flex flex-coloumn align-items-center text-white justify-content-center form order-2">
                        <h1 className="display-4 fw-bolder mb-3">Hello, Auctioneer</h1>
                        <p className="lead text-center mb-3">Enter Your Credentials To Register</p>
                        <h5 className='mb-4'>OR</h5>
                        <NavLink
                            to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
                        <form onSubmit={handleSubmit} method='POST'>
                            <div class="mb-3">
                                <label for="name">Username</label>
                                <input type="text" class="form-control" id="name"
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}
                                />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">I Agree Terms And Conditions</label>
                            </div>
                            <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;