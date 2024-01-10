//importing useEffect and useState hooks
import { useEffect, useState } from "react"

export const Card = ({flashcard}) => {
    const [currText, setCurrText] = useState("");
    const [deleted, setDeleted] = useState(false);
    
    //set flashcard to render to the passed prop
    useEffect(() => {
        setCurrText(flashcard.term);
    }, [flashcard])

    //Only render cards which have not been previously deleted
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