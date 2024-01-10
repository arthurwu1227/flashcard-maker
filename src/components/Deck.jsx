import "../styling/Flashcards.css"
import Card from "./Card";

export const Deck = ({cards}) => {
    //render all cards in the deck inside CSS "deckbox" class
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