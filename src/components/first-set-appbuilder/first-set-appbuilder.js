import React, {useState} from 'react';
import QuestionItem from "../question-item/question-item";
import style from "../../assets/styles/scss/app.module.css";
import s from '../../assets/styles/scss/true-totop.module.css'
import QuizItem from "../quiz-item";


const FirstSetAppbuilder = () => {
    const db = require('../../set_1.json')
    const [page, setPage] = useState(0)
    // QuestionItem
    let items = db.map(item => <QuizItem question={item.question}
                                             first_answer={item.answers.first_answer}
                                             second_answer={item.answers.second_answer}
                                             third_answer={item.answers.third_answer}
                                             fourth_answer={item.answers.fourth_answer}
                                             five_answer={item.answers.five_answer}
                                             true_answer={item.true_answer}
                                             obj = {item}
                                             page={page}
                                             setPage={setPage}
                                             length = {db.length}
    />)
    return (
        <div id={'toppos'}>
            {items[page]}
        </div>
    );
}




export default FirstSetAppbuilder;