import React, {useState} from 'react';
import QuestionItem from "../../question-item/question-item";
import style from "../../../assets/styles/scss/app.module.css";
import s from "../../../assets/styles/scss/true-totop.module.css";
import QuizItem from "../../quiz-item";

const ThirdSetDev = () => {

    const db = require('../../developer_1_DATA/third_set.json')
    const [page, setPage] = useState(0)

    let items = db.map(item => <QuizItem    obj = {item}
                                            page={page}
                                            setPage={setPage}
                                            length = {db.length}
    />)

    return (
        <div id={'toppos'}>
            {page < 0 || page > db.length ? items[0] : items[page]}
        </div>
    );
};




export default ThirdSetDev;