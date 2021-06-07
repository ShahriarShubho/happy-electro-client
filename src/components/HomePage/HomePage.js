import React from 'react';
import About from '../About/About';
import Feature from '../Feature/Feature';
import Home from '../Home/Home';

const HomePage = () => {
    return (
        <div>
            <Feature/>
            <Home/>
            <About/>
        </div>
    );
};

export default HomePage;