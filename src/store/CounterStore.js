import { create } from "zustand";

export const useCounterStore=create((set)=>({
//state
newCounter:0,
newCounter1:100,
newCounter2:0,
//add user state
user:{name:"ravi",email:"ravi@mail.com",age:21},
//function to modify the state 
changeEmail:()=>set({...user,email:"test@mail.com"}),
changeNameandAge:()=>set({...user,name:"bhanu",age:23}),
incrCounter:()=>set(state=>({newCounter:state.newCounter+1})),
decrCounter:()=>set(state=>({newCounter:state.newCounter-1})),
reset:()=>set({newCounter:0}),
//function to change to 500
Counterto500:()=>set({newCounter2:500}),
//function to decrmnt newcounter1 by 20
decrby20:()=>set(state=>({newCounter:state.newCounter1-20})),


}))
