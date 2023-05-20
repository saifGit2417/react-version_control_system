import React from 'react'

interface Props {
    countValue:number
    handlerFunction:()=>void
}

const CounterButton:React.FC<Props> = ({countValue,handlerFunction}) => {
  return (
    <div>
        <button onClick={handlerFunction}>count {countValue} </button>
    </div>
  )
}

export default CounterButton