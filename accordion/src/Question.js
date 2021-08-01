import React, {useState} from 'react'

import { CgClose, CgMathPlus } from "react-icons/cg";

const Question = ({question}) => {
    const {title, info} = question;

    const [showAnswer, setShowAnswer] = useState(false);


    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        // console.log(showAnswer);
    }
    

    return (
        <div className = 'question-card'  onClick = {toggleAnswer}>
            
            <p className = 'question'><button className = 'expand-button'>{showAnswer ? <CgClose/> : <CgMathPlus/> }</button> {title}</p> 
            
            {showAnswer && <p className = 'answer'>{info}</p>}
        </div>
    )
}

export default Question
