import phrases from './utils/phrases.json'
import './App.css'
import { useState } from 'react'
import getRandomFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrPhotos from './utils/photos' 
 

function App() {
  const initialPhrase = getRandomFromArr(phrases)
  const initialPhoto = getRandomFromArr(arrPhotos)
  
  const [quoteRandom, setQuoteRandom] = useState(initialPhrase)
  const [photoRandom, setPhotoRandom] = useState(initialPhoto)
  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <div className='app__card'>
        <Phrase quoteRandom={quoteRandom} />
        <Button 
        setQuoteRandom={setQuoteRandom}
        setPhotoRandom={setPhotoRandom}/>
      </div>
    </div>
  )
}

export default App
