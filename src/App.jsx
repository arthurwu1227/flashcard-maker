import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import Deck from './components/Deck'
import Input from './components/Input'

function App() {

  const [cards, setCards] = useState([]);
  const [aiOn, setAiOn] = useState(false);

  const testArr = [{term: "democrat", definition: "a liberal party"}, 
{term: "republican", definition: "a conservative party"}];

  return (
    <>
      <h2>Arthur's Flashcards App</h2>
      <h4>Powered by ChatGPT</h4>

      <button onClick={() => {setAiOn(!aiOn)}}>
        {aiOn ? "Turn AI Mode Off" : "Turn AI Mode On"}</button>
      
      <Deck cards={cards}></Deck>
      <Input cardSetter={setCards} currDeck={cards} aiToggle={aiOn}></Input>
    </>
  )
}

export default App
