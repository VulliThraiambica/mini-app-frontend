import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
function Editemployee() {
const navigate=useNavigate();
const {register,handleSubmit,formState:{errors},setValue}=useForm();

useEffect(()=>{
if (state){
  setValue("name",state.name);
  setValue("email",state.email);
  setValue("mobile",state.mobile);
  setValue("designation",state.designation);
  setValue("companyname",state.companyname);}
},[]);

const savemodifiedemp = async (modifiedemp) => {
  try {
    const res = await axios.put(
      import.meta.env.VITE_API_URL + `/employee-api/employee/${state._id}`,
      modifiedemp
    );

    if (res.status === 200) {
      navigate("/list");
    }
  } catch (err) {
    console.log(err);
  }
};


//get empobj from navigate book
const {state}=useLocation();

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600" > Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(savemodifiedemp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyname")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4" >
          Save changes 
        </button>
      </form>
    </div>
  )
}

export default Editemployee