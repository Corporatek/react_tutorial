import React from "react"

function Joke(props) {
    
// If props of joke has a question return the question and answer.  If props of joke does not have a question only return the answer
    if (props.joke.question) {
        return (
            <div>
                <p>{props.joke.question}</p>
                <p>{props.joke.answer}</p>
            </div>
        )
        
    } else {
        let joke = "I worked"

//    console.log(joke)
        return(joke)

    }
}


export default Joke