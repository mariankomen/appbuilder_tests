import React from 'react';

import styles from '../../assets/styles/scss/homepage.module.css'
import logo from '../../assets/images/logo.png'
import QuizItem from "../quiz-item";

const Homepage = () => {
    return (
        <div className={styles.main}>
            <img src={logo} className={styles.logo}/>
        </div>
    );
};

export default Homepage;