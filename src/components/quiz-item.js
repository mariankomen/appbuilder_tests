import React, {useEffect, useState} from 'react';

import style from '../assets/styles/scss/component.module.css'
import toplogo from '../../src/assets/images/top-logo.png'
import rightbar from '../assets/images/rightbar.png'
import cryterion from '../assets/images/kryterion.png'

const QuizItem = (props) => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [five, setFive] = useState(false)
    const [styles, setStyles] = useState({backgroundColor: 'white',})
    const [ANSWER, setANSWER] = useState(0)

    const arr = [first, second, third, fourth, five]
    const arr_1 = []

    const button_func = (e) => {
        if (props.true_answer === arr_1.join(',')) {
            setANSWER(ANSWER + 1)
            console.log(true)
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
            setFive(false)

        } else {
            console.log(false)
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
            setFive(false)
        }
    }
    const confirm_exam = () => {
        alert(`Your score ${ANSWER} of ${props.length}`)
    }
    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === true) {
                arr_1.push(i + 1)
            }
        }
    }, arr)

    return (
        <div className={style.main_block}>
            <div className={style.logo_bot}><img src={toplogo} alt={'Logo'}/></div>
            <div className={style.test_rightbar}>
                <div className={style.test_block}>
                    <div className={style.two_logos}>
                        <img src={cryterion} alt={'Logo'}/>
                    </div>
                    <div className={style.test_item}>
                        <div className={style.counter_question}>
                            {props.page + 1} of {props.length}.
                        </div>
                        <div className={style.test}>
                            {/*Start quiz-item*/}
                            {/*CHEKING RADIO OR CHECKBOX*/}
                            {props.true_answer.length === 1 ?
                                <div>
                                    <div className={style.general__question}>
                                        <h4 className={style.general__question__text}>
                                            {props.question}
                                        </h4>
                                    </div>
                                    <div className={style.general__question__inputs}>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFirst(!first)}
                                        > A. <input type='radio'
                                                    checked={first}
                                        /><p>{props.first_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setSecond(!second)}
                                        > B. <input type='radio'
                                                    checked={second}
                                        /><p>{props.second_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setThird(!third)}
                                        > C. <input type='radio'
                                                    checked={third}
                                        /><p>{props.third_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFourth(!fourth)}
                                        > D. <input type='radio'
                                                    checked={fourth}
                                        /><p>{props.fourth_answer}</p></span>
                                        {props.obj.answers.five_answer ?
                                            <span className={style.general__question__inputs__item}
                                                  style={styles}
                                                  onClick={() => setFive(!five)}
                                            > E. <input type='radio'
                                                        checked={five}
                                            /><p>{props.five_answer}</p></span> : null}
                                    </div>
                                    {/*finish*/}
                                </div>

                                :

                                <div>
                                    <div className={style.general__question}>
                                        <h4 className={style.general__question__text}>
                                            {props.question}
                                        </h4>
                                    </div>
                                    <div className={style.general__question__inputs}>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFirst(!first)}
                                        > A. <input type='checkbox'
                                                    checked={first}
                                        /><p>{props.first_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setSecond(!second)}
                                        > B. <input type='checkbox'
                                                    checked={second}
                                        /><p>{props.second_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setThird(!third)}
                                        > C. <input type='checkbox'
                                                    checked={third}
                                        /><p>{props.third_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFourth(!fourth)}
                                        > D. <input type='checkbox'
                                                    checked={fourth}
                                        /><p>{props.fourth_answer}</p></span>
                                        {props.obj.answers.five_answer ?
                                            <span className={style.general__question__inputs__item}
                                                  style={styles}
                                                  onClick={() => setFive(!five)}
                                            > E. <input type='checkbox'
                                                        checked={five}
                                            /><p>{props.five_answer}</p></span> : null}
                                    </div>
                                    {/*finish*/}
                                </div>}
                            {/*Finish test block*/}
                        </div>
                    </div>
                    <div className={style.button}>
                        <div className={style.button__item}
                             onClick={() => props.setPage(props.page - 1)}
                        > {`< Back`} </div>
                        <div className={style.button__item}
                             onClick={() => {
                                 props.setPage(props.page + 1)
                                 button_func()
                             }}
                        > {`Next >`} </div>
                        <div className={style.button__item}
                             onClick={() => {
                                 alert("Button in development. Please wait)")
                             }}
                        > Review All
                        </div>
                        <div className={style.button__item}
                             onClick={() => confirm_exam()}
                        > Submit Exam
                        </div>
                    </div>
                </div>
                <div className={style.rightbar}>
                    <img src={rightbar} alt={'Logo'}/>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;