import React from 'react';
import Layout from '../Layout';
import classes from './contact.module.css';

const Contact = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <img
                            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="contact"
                            className={classes.image}
                        />
                    </div>
                    <div className="col-12 col-sm-8">
                        <section className="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4">
                                Contact me
                            </h2>
                            <p className="text-center w-responsive mx-auto mb-5">
                              How can I help you or would you like to hire me?
                            </p>

                            <div className="row">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <form
                                        id="contact-form"
                                        name="contact-form"
                                        action="mail.php"
                                        method="POST"
                                    >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label
                                                        for="name"
                                                        className=""
                                                    >
                                                        Your name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label
                                                        for="email"
                                                        className=""
                                                    >
                                                        Your email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <label
                                                        for="subject"
                                                        className=""
                                                    >
                                                        Subject
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <label for="message">
                                                        Your message
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        id="message"
                                                        name="message"
                                                        rows="2"
                                                        className="form-control md-textarea"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="text-center text-md-left">
                                        <button className="btn btn-primary">
                                            Send
                                        </button>
                                    </div>
                                    <div className="status"></div>
                                </div>

                                <div className="col-md-3 text-center">
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <i className="fas fa-map-marker-alt fa-2x"></i>
                                            <p>Oakland, CA 94607, USA</p>
                                        </li>

                                        <li>
                                            <i className="fas fa-phone mt-4 fa-2x"></i>
                                            <p>+ 510 365 6225</p>
                                        </li>

                                        <li>
                                            <i className="fas fa-envelope mt-4 fa-2x"></i>
                                            <p>darlanebrown@gmail.com.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
