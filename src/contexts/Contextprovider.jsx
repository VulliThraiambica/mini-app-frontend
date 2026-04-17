import {createContext,useState} from 'react'
// create context prov obj
export const countercontextobj =createContext()
function Contextprovider({children}) {
    //state
    const[counter,setCounter]=useState(10)
    const [counter1,setCounter1]=useState(20);
    // function to change state
    const changeCounter=()=>{
        setCounter(counter+1)
    }
    const changeCounter1=()=>{
      setCounter1(counter1+1)
    }

  return (
   <countercontextobj.Provider value={{counter,counter1,changeCounter,changeCounter1}}>
    {children}
   </countercontextobj.Provider>
  )
}

export default Contextprovider