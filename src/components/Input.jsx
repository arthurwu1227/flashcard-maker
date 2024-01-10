import { useState } from "react";
import "../styling/Flashcards.css"
import { completeMessage } from "../queryGPT"

export const Input = ({cardSetter, currDeck, aiToggle}) => {
    const [term, setTerm] = useState("");
    const [definition, setDefinition] = useState("");

    //helper functions
    const keyDownTerm = (event) => {
        setTerm(event.target.value);
        event.preventDefault();
    }

    const keyDownDef = (event) => {
        setDefinition(event.target.value);
        event.preventDefault();
    }

    //async function to handle creation of flashcards in AI assisted mode
    const aiCreateFlashcard = async () => {
        const aiDefinition = await completeMessage(term);
        cardSetter([...currDeck, {term: term, definition: aiDefinition}]);
    }


    //conditional rendering: render different input UIs based on whether AI assisted mode is on or off
    if (aiToggle) {
        return (
            <>
            <p>Please note that it will take some time for AI-generated cards to generate in the deck.</p>
            <div className="inputContainer">
            <h5>Type term below</h5>
            <input type="text" className="inputBox" onChange={keyDownTerm}></input>
            <button onClick={aiCreateFlashcard}>Create flashcard</button>
            </div>
            </>
        )
    }
    else {
    return (
        <>
        <div className="inputContainer">
        <h5>Type term below</h5>
        <input type="text" className="inputBox" onChange={keyDownTerm}></input>
        <h5>Type definition below</h5>
        <input type="text" className="inputBox" onChange={keyDownDef}></input>
        <button onClick={() => {
            cardSetter([...currDeck, {term: term, definition: definition}]);
        }}>Create flashcard</button>
        </div>
        </>
    )
    }
}


export default Input;