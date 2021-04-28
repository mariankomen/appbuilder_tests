import React, {useEffect, useState} from 'react';

import style from '../../assets/styles/scss/questionitem.module.css'

const QuestionItem = (props) => {

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)
    const [styles, setStyles] = useState({backgroundColor: 'white',})

    const use = []

    const arr = [first, second, third, fourth]
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
        } else {
            alert(`
                                Answer is INCORRECT!!!
            
                   Reread the question, and try again)
            `)
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
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

            </div>
            <div className={style.general__button}>
                <button
                    onClick={button_func}
                    className={style.btn}
                >Submit
                </button>
            </div>
        </div>
    );
};

export default QuestionItem;