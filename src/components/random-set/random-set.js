import React, {useState} from 'react';
import QuestionItem from "../question-item/question-item";
import style from "../../assets/styles/scss/app.module.css";
import s from "../../assets/styles/scss/true-totop.module.css";

const RandomSet = () => {
    const db = require('../../database.json')
    const db_1 = require('../../set_1.json')
    const db_2 = require('../../set_3.json')
    const all = [...db,...db_1,...db_2]
    const random_set = []

    const [ANSWER, setANSWER] = useState(0)
    // for(let i = 0; i<1; i++){
    //     random_set.push(all[Math.floor(Math.random()*all.length)])
    // }
    for(let i = 0; i<1; i++){
        random_set.push(db_2[Math.floor(Math.random()*db_2.length)])
    }

    let items = random_set.map(item => <QuestionItem question={item.question}
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
            <span className={`${style.answers} ${s.answers}`}>True answers: {ANSWER}</span>
            {items}
        </div>
    );
};

export default RandomSet;