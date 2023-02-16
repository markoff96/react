import {useState} from 'react'
import generateRandomNum from '../Utils/generateRandomNum'

function RandomNumber({maxNum}) {
   const [randomNum, setRandomNum] = useState(0)
   const changeRandomNum = () =>{
        setRandomNum(generateRandomNum(maxNum))
   }
    return(
    <div>
        <h1>{randomNum}</h1>
        <button onClick={changeRandomNum}>Generate new number</button>
    </div>
    )
}
export default RandomNumber