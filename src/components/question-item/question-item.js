import React, {useEffect, useState} from 'react';

import style from '../../assets/styles/scss/questionitem.module.scss'

const QuestionItem = (props) => {

    const [answer, setAnswer] = useState('')

    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [fourth, setFourth] = useState(false)

    const arr_1 = []

    const arr = [first, second, third, fourth]

    const button_func = () => {
        checker()
        console.log(`${answer}, ${props.true_answer}`)
        if(props.true_answer === arr_1.join(',')){
            props.setANSWER(props.ANSWER+1)
            console.log('good')
        } else {
            console.error('bad')
        }
    }

    useEffect(() => {
        console.log(first, second, third, fourth)
        for(let i = 0; i<arr.length; i++){
            if(arr[i] === true){
                arr_1.push(i+1)
            }
        }
        console.log(arr_1)
    },arr)

    const checker = () => {
        if (first === true) {
            setAnswer('1')
        } else if (second === true) {
            setAnswer('2')
        } else if (third === true) {
            setAnswer('3')
        } else if (fourth === true) {
            setAnswer('4')
        } else if (first === true && second === true) {
            setAnswer('1,2')
        } else if (first === true && third === true) {
            setAnswer('1,3')
        } else if (first === true && fourth === true) {
            setAnswer('1,4')
        } else if (second === true && third === true) {
            setAnswer('2,3')
        } else if (second === true && fourth === true) {
            setAnswer('2,4')
        } else if (third === true && fourth === true) {
            setAnswer('3,4')
        }
    }




    return (
        <div className={style.general}>
            <div className={style.general__question}>
                <h4 className={style.general__question__text}>
                    {props.question}
                </h4>
            </div>
            <div className={style.general__question__inputs}>
                <span className={style.general__question__inputs__item}> <input type='radio'
                                                                                checked={first}
                                                                                onClick={() => setFirst(!first)}
                /><p>{props.first_answer}</p></span>
                <span className={style.general__question__inputs__item}> <input type='radio'
                                                                                checked={second}
                                                                                onClick={() => setSecond(!second)}
                /><p>{props.second_answer}</p></span>
                <span className={style.general__question__inputs__item}> <input type='radio'
                                                                                checked={third}
                                                                                onClick={() => setThird(!third)}
                /><p>{props.third_answer}</p></span>
                <span className={style.general__question__inputs__item}> <input type='radio'
                                                                                checked={fourth}
                                                                                onClick={() => setFourth(!fourth)}
                /><p>{props.fourth_answer}</p></span>
            </div>
            <div className={style.general__button}>
                <button
                    onClick={button_func}
                >Submit</button>
            </div>
        </div>
    );
};

export default QuestionItem;