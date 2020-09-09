import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                리액트 첫번째 토이프로젝트 영화 평점 웹사이트 
            </span>
            <span></span>
        </div>
    );
}

export default About;