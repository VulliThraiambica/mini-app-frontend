import React from 'react'
import { useCounterStore } from '../store/CounterStore'
import { countercontextobj } from '../contexts/Contextprovider'
import { useContext } from 'react'
function Test() {
const {counter1,changeCounter}=useCounterStore(countercontextobj)


  return (
    <div>

    </div>
  )
}

export default Test