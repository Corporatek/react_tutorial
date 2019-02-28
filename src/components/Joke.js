import React from "react"

function Joke(props) {
    
// If props of joke has a question return the question and answer.  If props of joke does not have a question only return the answer
    return (
        <div>
            {/* The activity under style is another way to create conditional formatting */}
            <h3 style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</h3>
            <h3 style={{color: !props.joke.question && "#888888"}}>Answer: {props.joke.answer}</h3>
            <hr></hr>
        </div>
    )
}


export default Joke