import "../styling/Flashcards.css"
import Card from "./Card";

export const Deck = ({cards}) => {
    return (
        <>
        <div className="deckbox">
            {cards.map((card) => {
                return (
                <>
                    <Card flashcard={card}></Card>
                </>);
            })}
        </div>
        </>
    )
}

export default Deck;