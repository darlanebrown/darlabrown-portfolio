import React from 'react';
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faGithub,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid } from '@material-ui/core';

const Footer = () => {
    return (
        <footer className="footer">
            <Box padding={2} position="fixed" bottom={0} left={0} right={0}>
                <Grid
                    container
                    spacing={5}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item>
                        <a
                            href="http://www.facebook.com"
                            target="_https://www.facebook.com/darla.brown.50"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            <FontAwesomeIcon icon={faFacebook} fontSize={24} />
                        </a>
                    </Grid>
                    <Grid item>
                        {' '}
                        <a
                            href="http://www.instagram.com"
                            target=" https://www.instagram.com/darlanebrown26"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            <FontAwesomeIcon icon={faInstagram} fontSize={24} />
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                            href="http://www.github.com"
                            target="_https://github.com/darlanebrown"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            <FontAwesomeIcon icon={faGithub} fontSize={24} />
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                            href="http://www.twitter.com"
                            target="https://@darlanebrown26"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            <FontAwesomeIcon icon={faTwitter} fontSize={24} />
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                            href="http://www.linkedin.com"
                            target="https://linkedin.com/in/darla-brown-b1383943"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-black"
                        >
                            <FontAwesomeIcon icon={faLinkedin} fontSize={24} />
                        </a>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};
export default Footer;
