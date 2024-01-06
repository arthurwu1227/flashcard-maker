import { useEffect, useState } from "react"

export const Card = ({flashcard}) => {
    const [currText, setCurrText] = useState("");
    const [deleted, setDeleted] = useState(false);
    
    useEffect(() => {
        setCurrText(flashcard.term);
    }, [flashcard])

    if (!deleted){
        return (
            <>
                <p className="card" onClick={() => {
                    if (currText == flashcard.term) {
                        setCurrText(flashcard.definition);
                    } else {
                        setCurrText(flashcard.term);
                    }
                }}>{currText}
                <button onClick={() => {setDeleted(true)}}>Delete Card</button>
                </p>
            </>
        )
    }
}

export default Card;