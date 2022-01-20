import React from 'react';
import Layout from './Layout';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Resume = () => {
    return (
        <Layout>
            <div
                className="content-container d-flex align-items-center justify-content-center"
                id="top"
            >
                <div className="page-content">
                    <div className="container">
                        <div className="cover shadow-lg bg-white">
                            <div className="cover-bg p-3 p-lg-4 text-white">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="avatar hover-effect bg-white shadow-sm p-1">
                                            <img
                                                src={require('./Darla B.jpg')}
                                                width="150"
                                                height="150"
                                                alt="profile"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                                        <h2 className="h1 mt-2">Darla Brown</h2>
                                        <p>
                                            Web and mobile application developer
                                        </p>
                                        <div className="d-print-none">
                                            <a
                                                className="btn btn-light text-dark shadow-sm mt-1 me-1"
                                                href="/src/assets/resume.docx"
                                                target="_blank"
                                            >
                                                Download CV
                                            </a>
                                            <a
                                                className="btn btn-success shadow-sm mt-1"
                                                href="#contact"
                                            >
                                                Hire Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-section pt-4 px-3 px-lg-4 mt-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="h3 mb-3">Summary</h2>
                                        <p>
                                        Demonstrated the ability to complete tasks accurately, despite interruptions
                                         and competing demands. Creative professional with extensive project, experience 
                                         from concept to development. I am an innovator, that always figuring a way to create new content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-print-none" />
                            <div className="skills-section px-3 px-lg-4">
                                <h2 className="h3 mb-3">Professional Skills</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <span>HTML</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: '90%' }}
                                                    aria-valuenow="90"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <span>CSS</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: '85%' }}
                                                    aria-valuenow="85"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <span>JavaScript</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: '75%' }}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <span>React</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: '80%' }}
                                                    aria-valuenow="90"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <span>React Native</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: '85%' }}
                                                    aria-valuenow="85"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <span>Git</span>
                                            <div className="progress my-1">
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: '75%' }}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-print-none" />
                            <div className="work-experience-section px-3 px-lg-4">
                                <h2 className="h3 mb-4">Work Experience</h2>
                                <div className="timeline">
                                    <div className="timeline-card timeline-card-primary card shadow-sm">
                                        <div className="card-body">
                                            <div className="h5 mb-1">
                                                Medical Secretary, and Billing
                                                Technician
                                                <span className="text-muted h6">
                                                    at lameda Health System
                                                </span>
                                            </div>
                                            <div className="text-muted text-small mb-2">
                                                10/2002 to 02/2019
                                            </div>
                                            <div>
                                                <p>
                                                    Digitized over data
                                                    transition medical records
                                                    and organized files into
                                                    company's system using
                                                    Solarian
                                                </p>
                                                <p>
                                                    Company's clinics office
                                                    activities, including
                                                    customer service, patient
                                                    appointment management,
                                                    billing and collections, and
                                                    office administration
                                                </p>
                                                <p>
                                                    Supervised and trained
                                                    admitting, billing and
                                                    collection staff
                                                </p>
                                                <p>
                                                    Managed medical supply
                                                    inventory, insurance
                                                    records, patient charts and
                                                    company files using online
                                                    tracking system
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-card timeline-card-primary card shadow-sm">
                                        <div className="card-body">
                                            <div className="h5 mb-1">
                                                React-Native and React
                                                apprentice
                                                <span className="text-muted h6">
                                                    at Alpha-works
                                                    Apprenticeship
                                                </span>
                                            </div>
                                            <div className="text-muted text-small mb-2">
                                                2021 to Present
                                            </div>
                                            <div>
                                                <p>
                                                    Scrum, Agile projects in
                                                    React and React-Native,
                                                    Github and Git Flow/project
                                                    board goals to work on real
                                                    client project, team
                                                    building exercise
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-print-none" />
                            <div className="page-break"></div>
                            <div className="education-section px-3 px-lg-4 pb-4">
                                <h2 className="h3 mb-4">Education</h2>
                                <div className="timeline">
                                    <div className="timeline-card timeline-card-success card shadow-sm">
                                        <div className="card-body">
                                            <div className="h5 mb-1">
                                                Kickstart Coding bootcamp
                                                <span className="text-muted h6">
                                                    Oakland,CA 94612
    
                                                </span>
                                            </div>
                                            <div className="text-muted text-small mb-2">
                                                2019
                                            </div>
                                            <div>
                                                Coursework included final
                                                projects in Python, JavaScript,
                                                and Computer Science
                                                fundamentals Wed development
                                                Full stack
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-card timeline-card-success card shadow-sm">
                                        <div className="card-body">
                                            <div className="h5 mb-1">
                                                Women Who Code San
                                                Francisco/Oakland
                                                <span className="text-muted h6">
                                                    from Bay Area California
                                                </span>
                                            </div>
                                            <div className="text-muted text-small mb-2">
                                                2019 to 2020
                                            </div>
                                            <div>
                                                co-lead assisting lead with
                                                planning and organizing meeting
                                                and meetup. Soliciting sponsors
                                                for mentorship. Planning study
                                                group for preparing algorithm
                                                white board test. Study group
                                                mentors support.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-card timeline-card-success card shadow-sm">
                                        <div className="card-body">
                                            <div className="h5 mb-1">
                                                Bitwise Industries bootcamp
                                                <span className="text-muted h6">
                                                    Fresno, CA 93706 (remote)
                                                </span>
                                            </div>
                                            <div className="text-muted text-small mb-2">
                                                2021
                                            </div>
                                            <div>
                                                Coursework include Javascript,
                                                React, Redux, Github using VS
                                                code
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-print-none" />
                            <div
                                className="contant-section px-3 px-lg-4 pb-4"
                                id="contact"
                            >
                                <h2 className="h3 text mb-3">Contact</h2>
                                <div className="row">
                                    <div className="col-md-7 d-print-none">
                                        <div className="my-2">
                                            <form
                                                action="https://formspree.io/your@email.com"
                                                method="POST"
                                            >
                                                <div className="row">
                                                    <div className="col-6">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Your Name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            id="email"
                                                            name="_replyto"
                                                            placeholder="Your E-mail"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group my-2">
                                                    <textarea
                                                        className="form-control"
                                                        style={{
                                                            resize: 'none',
                                                        }}
                                                        id="message"
                                                        name="message"
                                                        rows="4"
                                                        placeholder="Your Message"
                                                        required
                                                    ></textarea>
                                                </div>
                                                <button
                                                    className="btn btn-primary mt-2"
                                                    type="submit"
                                                >
                                                    Send
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mt-2">
                                            <h3 className="h6">Address</h3>
                                            <div className="pb-2 text-secondary">
                                                1225 Magnolia st. Oakland, CA 94607
                                                U.S.A
                                            </div>
                                            <h3 className="h6">Phone</h3>
                                            <div className="pb-2 text-secondary">
                                                510 365 6225
                                            </div>
                                            <h3 className="h6">Email</h3>
                                            <div className="pb-2 text-secondary">
                                                darlanebrown@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col d-none d-print-block">
                                        <div className="mt-2">
                                            <div>
                                                <div className="mb-2">
                                                    <div className="text-dark">
                                                        <i className="fab fa-twitter mr-1"></i>
                                                        <span>
                                                            https://twitter.com/
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="text-dark">
                                                        <i className="fab fa-facebook mr-1"></i>
                                                        <span>
                                                            https://www.facebook.com/
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="text-dark">
                                                        <i className="fab fa-instagram mr-1"></i>
                                                        <span>
                                                            https://www.instagram.com/
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="text-dark">
                                                        <i className="fab fa-github mr-1"></i>
                                                        <span>
                                                            https://github.com/
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
