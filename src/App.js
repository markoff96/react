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
  return (
    <div className='App'>
      <RandomNumber maxNum={1000} />
      <Counter count={count}/>
      <Button count={count}  onClick={setCount} text ={texts[0]}/>
      <Button count={count}  onClick={setCount} text = {texts[1]}/>
      <Button count={count}  onClick={setCount} text = {texts[2]}/>
      <Button count={count}  onClick={setCount} text = {texts[3]}/>
    </div>
  )
}

export default App 