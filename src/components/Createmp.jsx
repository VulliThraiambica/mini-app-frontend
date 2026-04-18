import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { countercontextobj } from '../contexts/Contextprovider'
import { useContext } from "react";
function Createmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
const {counter1,changeCounter1}=useContext(countercontextobj)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
console.log("API URL:", import.meta.env.VITE_API_URL);
  //form submit
  const onFormSubmit = async (newEmpObj) => {
  try {
    setLoading(true);

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/employee-api/employee",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      }
    );

    if (response.status === 201) {
      navigate("/list");
    } else {
      let errorRes;
      try {
        errorRes = await response.json();
      } catch {
        throw new Error("Something went wrong");
      }
      throw new Error(errorRes.message || "Something went wrong");
    }

  } catch (err) {
    console.log("err in catch", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
       <div>
      <h1 className='text-4xl'>counter1 : {counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-300 p-6'>
        change
      </button>
    </div>

      <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
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

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
    
  );
}

export default Createmp;