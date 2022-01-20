import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logoContainer: {
        marginRight: theme.spacing(2),
        alignItems: 'flex-start',
        display: 'flex',
        flexGrow: 0,
    },
    menu: {
        flexGrow: 1,
         border: '1px red solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: { maxWidth: 80 },
    link: {
        color: theme.palette.common.black,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.common.black,
            textDecoration: 'underline',
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    const [showDrawer, setShowDrawer] = useState(false);

    const list = () => (
        <div className={`${classes.list}`} role="presentation">
            <List>
                <Link to="/" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/about" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="About" />
                    </ListItem>
                </Link>
                <Link to="/contact" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </Link>
                <Link to="/portfolio" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                </Link>
                <Link to="/resume" className={classes.link}>
                    <ListItem button>
                        <ListItemText primary="Resume" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Link to={'/'}>
                        <img
                            src={require('../logo.jpeg')}
                            alt="logo"
                            className={classes.logo}
                        />
                    </Link>
                    <Box className={classes.menu}>
                        <Hidden only={['xs']}>
                            <Link to="/" className={classes.link}>
                                Home
                            </Link>
                            <Link to="/about" className={classes.link}>
                                About
                            </Link>
                            <Link to="/resume" className={classes.link}>
                                Resume
                            </Link>
                            <Link to="/portfolio" className={classes.link}>
                                Portfolio
                            </Link>
                            <Link to="/contact" className={classes.link}>
                                Contact
                            </Link>
                        </Hidden>
                        <Hidden only={['sm', 'md', 'lg', 'xl']}>
                            <Button onClick={() => setShowDrawer(true)}>
                                <FontAwesomeIcon icon={faBars} />
                            </Button>
                            <Drawer
                                anchor={'right'}
                                open={showDrawer}
                                onClose={() => setShowDrawer(false)}
                            >
                                {list()}
                            </Drawer>
                        </Hidden>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Navbar;
