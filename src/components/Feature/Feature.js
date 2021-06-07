import React from 'react';
import Typical from "react-typical";
import './Feature.css'


const Feature = () => {
    return (
        <div className="feature-image">
            <div className="feature-text">
            <h1 className="heading">
            <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " Welcome to the Website",
              1000,
              " What you need???",
              1000,
              " All in one, Everything is her",
              1000
            ]}
          />
        </h1>
            </div>
        </div>
    );
};

export default Feature;