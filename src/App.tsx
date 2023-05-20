import { useState } from 'react'
import './App.css'
import CounterButton from './Components/CounterButton'
import Gallery, { Profile } from './Components/Gallery'

function App() {

  const [counter,setCounter]=useState<number>(0)

  const handleCounterValue=()=>{
    return setCounter(counter+1)
  }

  return (
    <>

    <h1> count value is {counter} </h1>

    <button onClick={()=>setCounter(0)}>Reset Counter</button>

    <CounterButton
     countValue={counter}
     handlerFunction={handleCounterValue}
    />

    <p>hello</p>
    <p>hello</p>
    <p>hello</p>

    <CounterButton
     countValue={counter}
     handlerFunction={handleCounterValue}
    />

    <CounterButton
     countValue={counter}
     handlerFunction={handleCounterValue}
    />

    {/* gallery is imported as default function */}
    <Gallery/>   

    {/* gallery is imported as named function */}
    <Profile/>
    <h1>hello</h1>
 
    </>
  )
}

export default App
