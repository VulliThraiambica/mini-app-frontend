import {useContext} from 'react'
import { countercontextobj } from '../contexts/Contextprovider'
import { useCounterStore } from '../store/CounterStore'

function Home()
{
let newCounter=useCounterStore((state)=>state.newCounter);
let incrCounter=useCounterStore((state)=>state.incrCounter);
const {counter,changeCounter}=useContext(countercontextobj)

  return (
    <div>
      <h1 className='text-4xl'>counter : {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-6'>
        change
      </button>
            <h1 className='text-4xl'> new counter : {newCounter}</h1>
      <button onClick={incrCounter} className='bg-red-300 p-6'>
        incr counter 
      </button>
    </div>
  )
}

export default Home