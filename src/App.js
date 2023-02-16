import { useState } from 'react'
import './App.css'
import RandomNumber from './components/RandomNumer'
import Counter from './components/Conter'
import Button from './components/Button'

const texts = [
  'Click me!',
  'Push!' ,
  'Kill me!',
  'Pull!'
]

function App() {
  const[count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className='App'>
      <Counter count={count}/>
      <Button count={count}  onClick={setCount} text ={texts[0]}/>
      {texts.map((text) => {
        return (
          <Button onClick={incrementCount} text={text}/>
        )
      })}
    </div>
  )
}



export default App 