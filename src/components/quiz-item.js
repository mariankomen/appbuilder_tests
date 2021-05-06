import React, {useEffect, useState} from 'react';

import style from '../assets/styles/scss/component.module.css'
import toplogo from '../../src/assets/images/top-logo.png'
import rightbar from '../assets/images/rightbar.png'
import cryterion from '../assets/images/kryterion.png'
import test from '../assets/images/img.png'
import * as Push from 'push.js'

const QuizItem = (props) => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [five, setFive] = useState(false)
    const [styles, setStyles] = useState({backgroundColor: 'white',})
    const [ANSWER, setANSWER] = useState(0)
    const [error, setError] = useState(false)


    const arr = [first, second, third, fourth, five]
    const arr_1 = []

    const button_func = (e) => {
        if (arr_1.length === props.obj.true_answer.split(',').join('').length) {
            if (props.obj.true_answer === arr_1.join(',')) {
                setANSWER(ANSWER + 1)
                console.log(true)
                setFirst(false)
                setSecond(false)
                setThird(false)
                setFourth(false)
                setFive(false)
                props.setPage(props.page + 1)
                setError(false)
            } else {
                console.log(false)
                setFirst(false)
                setSecond(false)
                setThird(false)
                setFourth(false)
                setFive(false)
                props.setPage(props.page + 1)
                setError(false)
            }
        } else {
            setError(true)
        }
    }

    const confirm_exam = () => {
        let score = Math.floor((100 * ANSWER) / props.length - 1)
        if (score >= 63) {
            alert(`Pass. ${score} %. ${ANSWER} true answers.`)
        } else {
            alert(`Fail: ${score}%. ${ANSWER} true answers.`)
        }
        props.setPage(0)
        setANSWER(0)
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
                        {/*<img src={cryterion} alt={'Logo'}/>*/}
                        <img src={test} alt={'Logo'}/>
                    </div>
                    <div className={style.test_item}>
                        <div className={style.counter_question}>
                            {props.page + 1} of {props.length}.
                        </div>
                        <div className={style.test}>
                            {/*Start quiz-item*/}
                            {/*CHEKING RADIO OR CHECKBOX*/}
                            {props.obj.true_answer.length === 1 ?
                                <div>
                                    <div className={style.general__question}>
                                        <h4 className={style.general__question__text}>
                                            {props.obj.question}
                                        </h4>
                                    </div>
                                    <div className={style.general__question__inputs}>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => {
                                                  setFirst(true)
                                                  setSecond(false)
                                                  setThird(false)
                                                  setFourth(false)
                                                  setFive(false)
                                              }}
                                        > A. <input type='radio'
                                                    checked={first}
                                        /><p>{props.obj.answers.first_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => {
                                                  setFirst(false)
                                                  setSecond(true)
                                                  setThird(false)
                                                  setFourth(false)
                                                  setFive(false)
                                              }}
                                        > B. <input type='radio'
                                                    checked={second}
                                        /><p>{props.obj.answers.second_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => {
                                                  setFirst(false)
                                                  setSecond(false)
                                                  setThird(true)
                                                  setFourth(false)
                                                  setFive(false)
                                              }}
                                        > C. <input type='radio'
                                                    checked={third}
                                        /><p>{props.obj.answers.third_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => {
                                                  setFirst(false)
                                                  setSecond(false)
                                                  setThird(false)
                                                  setFourth(true)
                                                  setFive(false)
                                              }}
                                        > D. <input type='radio'
                                                    checked={fourth}
                                        /><p>{props.obj.answers.fourth_answer}</p></span>
                                        {props.obj.answers.five_answer ?
                                            <span className={style.general__question__inputs__item}
                                                  style={styles}
                                                  oonClick={() => {
                                                      setFirst(false)
                                                      setSecond(false)
                                                      setThird(false)
                                                      setFourth(false)
                                                      setFive(true)
                                                  }}
                                            > E. <input type='radio'
                                                        checked={five}
                                            /><p>{props.obj.answers.five_answer}</p></span> : null}
                                    </div>
                                    {/*finish*/}
                                </div>

                                :

                                <div>
                                    <div className={style.general__question}>
                                        <h4 className={style.general__question__text}>
                                            {props.obj.question}
                                        </h4>
                                    </div>
                                    <div className={style.general__question__inputs}>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFirst(!first)}
                                        > A. <input type='checkbox'
                                                    checked={first}
                                        /><p>{props.obj.answers.first_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setSecond(!second)}
                                        > B. <input type='checkbox'
                                                    checked={second}
                                        /><p>{props.obj.answers.second_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setThird(!third)}
                                        > C. <input type='checkbox'
                                                    checked={third}
                                        /><p>{props.obj.answers.third_answer}</p></span>
                                        <span className={style.general__question__inputs__item}
                                              style={styles}
                                              onClick={() => setFourth(!fourth)}
                                        > D. <input type='checkbox'
                                                    checked={fourth}
                                        /><p>{props.obj.answers.fourth_answer}</p></span>
                                        {props.obj.answers.five_answer ?
                                            <span className={style.general__question__inputs__item}
                                                  style={styles}
                                                  onClick={() => setFive(!five)}
                                            > E. <input type='checkbox'
                                                        checked={five}
                                            /><p>{props.obj.answers.five_answer}</p></span> : null}
                                    </div>
                                    {/*finish*/}
                                </div>}
                            {error ? <span
                                className={style.error}>Pick {props.obj.true_answer.split(',').join('').length} answers!</span> : null}
                            {/*Finish test block*/}
                        </div>
                    </div>
                    <div className={style.button}>
                        <div className={style.button__item}
                             onClick={() => props.setPage(props.page - 1)}
                        > {`< Back`} </div>
                        <div className={style.button__item}
                             onClick={() => {
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
            <script src="push.js"></script>
        </div>

    );
};

export default QuizItem;