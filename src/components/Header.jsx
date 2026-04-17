import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
<nav className='flex justify-end text-xl p-4 bg-blue-300 text-amber-950 gap-7'>
    <NavLink to="/" className={({isActive})=>(isActive? "text-gray-800 bg-yellow-300 rounded-full p-2 ":"")}> Home </NavLink>
        <NavLink to="create-emp" className={({isActive})=>(isActive? "text-gray-800 bg-yellow-300 rounded-full p-2 ":"")}> Create emp </NavLink>
    <NavLink to="list" className={({isActive})=>(isActive?"text-gray-800 bg-yellow-300 rounded-full p-2 ":"")}> Employees list </NavLink>


</nav>  )
}

export default Header