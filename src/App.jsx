import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import Deck from './components/Deck'
import Input from './components/Input'

function App() {

  const [cards, setCards] = useState([]);

  const testArr = [{term: "democrat", definition: "a liberal party"}, 
{term: "republican", definition: "a conservative party"}];

  return (
    <>
      <h2>Arthur's Flashcards App</h2>
      <h4>ChatGPT Integrations Coming Soon</h4>
      <Deck cards={cards}></Deck>
      <Input cardSetter={setCards} currDeck={cards}></Input>
    </>
  )
}

export default App
