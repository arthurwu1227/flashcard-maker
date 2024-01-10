import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styling/App.css'
import Deck from './components/Deck'
import Input from './components/Input'
import Switch from '@mui/material/Switch';

function App() {

  const [cards, setCards] = useState([]);
  const [aiOn, setAiOn] = useState(false);

  //object used for testing
  const testArr = [{term: "democrat", definition: "a liberal party"}, 
{term: "republican", definition: "a conservative party"}];

  //render application
  return (
    <>
      <h2>Arthur's Flashcards App</h2>
      <h4>Powered by ChatGPT</h4>

      {aiOn ? "Toggle AI Mode Off":"Toggle AI Mode On"}
      <Switch onChange={() => {setAiOn(!aiOn)}}></Switch>
      
      <Deck cards={cards}></Deck>
      <Input cardSetter={setCards} currDeck={cards} aiToggle={aiOn}></Input>
    </>
  )
}

export default App
