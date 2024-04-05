import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
const Contact = () => {
    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setMsg({ ...msg, [name]: value })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, message
                })
            })
            console.log(res.status);
            if (res.status === 400 || !res) {
                window.alert("Message Not Sent . Try Again");
            } else {
                window.alert("Message Sent");
                setMsg({
                    name: "",
                    email: "",
                    message: ""

                })
            }

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div>
            <section id="contact"></section>
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us </h3>
                        <h1 className="display-6 text-center mb-4">Have Some<b> Questions?</b>
                        </h1>

                        <hr className='w-25 mx-auto' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="name.."
                                    name="name"
                                    value={msg.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="email@gmail.com"
                                    name="email"
                                    value={msg.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                    name="message"
                                    value={msg.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type='submit' className='btn btn-outline-primary'>Send Message
                                <i className='fa fa-paper-plane ms-2'></i></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;