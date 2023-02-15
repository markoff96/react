import './App.css'
import MyComponent from './components/MyComponent'
import ParModule from './components/ParModule'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumer'

function App() {
  return (
    <div className='App'>
      <MyComponent />
      <ParModule />
      <PetInfo animal='cat' age='12'  hasPet/>
      <PetInfo animal='duck' age='13' hasPet={false}/>
      <RandomNumber />
    </div>
  )
}
export default App