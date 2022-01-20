import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout({ children }) {
    return (
        <div className="container">
            <Navbar />
            <div className="content-container">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
