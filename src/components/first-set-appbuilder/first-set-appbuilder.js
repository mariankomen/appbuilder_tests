import React, {useState} from 'react';
import QuestionItem from "../question-item/question-item";
import style from "../../assets/styles/scss/app.module.css";

const FirstSetAppbuilder = () => {
    const db = require('../../set_1.json')
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
    function top() {
        document.getElementById( 'toppos' ).scrollIntoView({block: "start", behavior: "smooth"});
    }
    return (
        <div id={'toppos'}>
            <span className={style.answers}>True answers: {ANSWER}</span>
            <span ><button className={style.topButton}
                           onClick={() => top()}
            >To top</button></span>
            {items}
        </div>
    );
};




export default FirstSetAppbuilder;