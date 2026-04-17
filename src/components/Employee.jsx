import React from 'react'
import { useLocation } from 'react-router'
function Employee() {
  // read state received in navigation
  const {state}=useLocation();
  return (
    <div classname="m-auto text-2xl border-3 bg-amber-300 justify-center ">
<p>Name: {state.name}</p>
<p>Email: {state.email}</p>
<p>Mobile: {state.mobile}</p>
<p>Designation: {state.designation}</p>
<p>Company name: {state.companyname}</p>
    </div>
  )
}

export default Employee