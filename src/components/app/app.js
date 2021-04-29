import React, {useState} from 'react';

import style from '../../assets/styles/scss/app.module.css'
import Header from "../header/header";
import QuestionItem from "../question-item/question-item";
import {BrowserRouter, Route} from 'react-router-dom'
import FirstSetAppbuilder from "../first-set-appbuilder/first-set-appbuilder";
import SecondSetAppbuilder from "../second-set-appbuilder/second-set-appbuilder";
import RandomSet from "../random-set/random-set";
import Homepage from "../homepage/homepage";
import ThirdSetAppbuilder from "../third-set-appbuilder/third-set-appbuilder";

const App = () => {

    return (
        <div className={style.main}>
            <BrowserRouter>

                <Header/>
                <Route path='/' exact render={() => <Homepage/>}/>
                <Route path='/home' exact render={() => <Homepage/>}/>
                <Route path='/first' render={() => <FirstSetAppbuilder/>}/>
                <Route path='/second' render={() => <SecondSetAppbuilder/>}/>
                <Route path='/third' render={() => <ThirdSetAppbuilder/>}/>
                <Route path='/random' render={() => <RandomSet/>}/>

            </BrowserRouter>
        </div>
    );
};

export default App;