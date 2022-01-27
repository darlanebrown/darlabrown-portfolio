import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 style={{color: 'orange'}} >Darla Brown</h1>
                <Typed
                    className="typed-text text-white text-center"
                    strings={[
                        'Girl Friday',
                        'Web Development',
                        'Mobile Development',
                    ]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop
                    style={{ fontSize: 24, textAlign: 'center', marginBottom: 40 }}
                />
                <button className="btn btn-primary btn-main-offer">
                    <Link className="text-white"to={"/contact"}>
                    contact me
                    </Link>
                    
                </button>
            </div>
        </div>
    );
};

export default Header;
