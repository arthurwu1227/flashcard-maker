import { useState } from "react";
import "../styling/Flashcards.css"

export const Input = ({cardSetter, currDeck}) => {
    const [term, setTerm] = useState("");
    const [definition, setDefinition] = useState("");

    const keyDownTerm = (event) => {
        setTerm(event.target.value);
        event.preventDefault();
    }

    const keyDownDef = (event) => {
        setDefinition(event.target.value);
        event.preventDefault();
    }

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


export default Input;