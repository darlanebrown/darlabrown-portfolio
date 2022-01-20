import React from 'react';
import classes from './About.module.css';
import Layout from '../Layout';

const About = () => {
    return (
        <Layout>
            <div
                className={`content-container ${classes.container} d-flex align-items-center justify-content-center`}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-sm-4 col-12">
                            <div className="p-2 m-2 border border-dark">
                                <img
                                    src={require('../Darla B.jpg')}
                                    alt="darla"
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-8 col-12">
                            <h1>Darla Brown</h1>
                            <p>
                                Born in Seattle Washington, live between there
                                and Regina Saskatchewan Canada on Piapot Indian
                                reservation until 3 years old. We move to Fresno
                                California where I grew up, and the half of my
                                life lived in Oakland California. I headed her
                                own successful catering company employing youth
                                from the community. Through my journey and
                                experiences in life I’ve written novels 3 exact,
                                self-publish 1 on Amazon. And currently working
                                on my 4th. To top it off, I’ve written 4
                                screenplays and currently working on my 5th
                                script. For many many moons ago working at the
                                county hospital, I learn to problem solve
                                computer glitches, without experiences. My
                                co-workers express I was missing my calling, to
                                go back to school to learn depth of computer
                                programming. In my tiny spare time, I’d
                                volunteered East bay Collective ‘Feed the hood’,
                                this is where meet at a place and put together
                                toiletry bags and sandwiches to distribute to
                                the homeless encampment. But my passions is
                                support and volunteered Safe Place battered
                                women shelter fundraisers. Pre-covid I belong to
                                dance group, where we performed at venues,
                                parades, and festivals. My passion is music and
                                dancing..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default About;
