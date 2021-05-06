import React, {useState} from 'react';
import QuizItem from "../quiz-item";


const FirstSetAppbuilder = () => {
    const db = require('../../set_1.json')
    const [page, setPage] = useState(0)

    let items = db.map(item => <QuizItem     obj = {item}
                                             page={page}
                                             setPage={setPage}
                                             length = {db.length}
    />)
    return (
        <div id={'toppos'}>
            {page < 0 || page > db.length ? items[0] : items[page]}
        </div>
    );
}




export default FirstSetAppbuilder;