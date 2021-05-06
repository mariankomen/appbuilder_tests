import React, {useEffect, useState} from 'react';

import style from '../../assets/styles/scss/questionitem.module.css'

const QuestionItem = (props) => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [five, setFive] = useState(false)
    const [styles, setStyles] = useState({backgroundColor: 'white',})

    const arr = [first, second, third, fourth, five]
    const arr_1 = []

    // const button_func = () => props.true_answer === arr_1.join(',') ? props.setANSWER(props.ANSWER + 1) : alert('answer is incorrect')

    const button_func = (e) => {
        e.preventDefault()
        if (props.true_answer === arr_1.join(',')) {
            props.setANSWER(props.ANSWER + 1)
            alert('TRUE')
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
            setFive(false)

        } else {
            alert(`
                                Answer is INCORRECT!!!
            
                   Reread the question, and try again)
            `)
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
            setFive(false)
        }
    }

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === true) {
                arr_1.push(i + 1)
            }
        }
    }, arr)

    return (
        <div className={style.general}>
            {props.true_answer.length === 1 ? <div>
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
                        {props.obj.answers.five_answer ? <span className={style.general__question__inputs__item}
                                                               style={styles}
                                                               onClick={() => setFive(!five)}
                        > E. <input type='radio'
                                    checked={five}
                        /><p>{props.five_answer}</p></span> : null}
                        <button
                            onClick={button_func}
                            className={style.btn}
                        >Submit
                        </button>

                    </div>
                </div>
                // IF more then 1 answer
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
                        {props.obj.answers.five_answer ? <span className={style.general__question__inputs__item}
                                                               style={styles}
                                                               onClick={() => setFive(!five)}
                        > E. <input type='checkbox'
                                    checked={five}
                        /><p>{props.five_answer}</p></span> : null}
                        <button
                            onClick={button_func}
                            className={style.btn}
                        >Submit
                        </button>
                    </div>
                </div>

            }
        </div>


    );
};

export default QuestionItem;