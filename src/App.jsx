import phrases from './utils/phrases.json'
import './App.css'
import { useState } from 'react'
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'

 const arr = [1, 2, 3, 4]

function App() {
  const initialPhrase = getRandomFromArr(phrases)
  
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
  
  const objStyle = {
    backgroundImage: 'url(/fondo1.jpg)'
  }

  return (
    <div style={objStyle}>
      <h1>Galleta de la fortuna</h1>
      <Phrase quoteRandom={quoteRandom} />
      <Button setQuoteRandom={setQuoteRandom}/>
    </div>
  )
}

export default App
