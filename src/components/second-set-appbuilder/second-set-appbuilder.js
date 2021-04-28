import React, {useState} from 'react';
import QuestionItem from "../question-item/question-item";
import style from "../../assets/styles/scss/app.module.css";
import {BrowserRouter} from "react-router-dom";

const SecondSetAppbuilder = () => {
    const db = require('../../database.json')
    const [ANSWER, setANSWER] = useState(0)

    let items = db.map(item => <QuestionItem question={item.question}
                                             first_answer={item.answers.first_answer}
                                             second_answer={item.answers.second_answer}
                                             third_answer={item.answers.third_answer}
                                             fourth_answer={item.answers.fourth_answer}
                                             true_answer={item.true_answer}
                                             setANSWER={setANSWER}
                                             ANSWER={ANSWER}
    />)
    return (
        <div>
            <span className={style.answers}>True answers: {ANSWER}</span>
            {items}
        </div>
    );
};

export default SecondSetAppbuilder;