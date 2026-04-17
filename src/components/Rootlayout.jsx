import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

function Rootlayout() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen mx-20 p-20'>
<Outlet/>  
</div>  </div>
  )
}

export default Rootlayout