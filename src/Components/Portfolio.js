import React from 'react';
import Layout from './Layout';
import classes from './portfolio.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {
    return (
        <Layout>
            <div
                className={`content-container ${classes.container} d-flex align-items-center justify-content-center`}
            >
                <Carousel
                    infiniteLoop
                    autoPlay
                    dynamicHeight={false}
                    width={700}
                >
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-1.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://github.com/darlanebrown/ecard" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-2.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://github.com/darlanebrown/ecard" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-3.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://github.com/darlanebrown/decidr" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-4.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://github.com/darlanebrown/haunted-house-game" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-5.png')}
                            alt=""
                            className={classes.image}
                        />
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-6.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-7.png')}
                            alt=""
                            className={classes.image}
                        />
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-8.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    <div className={classes.carouselItem}>
                        <img
                            src={require('../assets/images/portfolio/portfolio-9.png')}
                            alt=""
                            className={classes.image}
                        />
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" >
                        <h3>View code on github</h3>
                        </a>
                    </div>
                    
                </Carousel>
            </div>
        </Layout>
    );
};

export default Portfolio;
