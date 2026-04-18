import { useState,useEffect } from "react"
import { useNavigate} from "react-router";
import axios from "axios";
function Listofemp() {
  const [emps,setEmps]=useState([]);
const navigate=useNavigate();
const gotoemployee=(empobj)=>{

  navigate("/employee",{state:empobj})
};
const gotoditemployee=(empobj)=>{
  navigate("/edit-emp",{state:empobj});
}


const deleteempbyid = async (id) => {
  try {
    const res = await axios.delete(
      import.meta.env.VITE_API_URL + `/employee-api/employee/${id}`
    );

    if (res.status === 200) {
      getEmps();
    }
  } catch (err) {
    console.log(err);
  }
};
// get all emps
async function getEmps() {
  try {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/employee-api/employee"
    );

    if (res.status === 200) {
      setEmps(res.data.payload);
    }
  } catch (err) {
    console.log(err);
  }
}
useEffect(()=>{
  getEmps();
},[]);
  return (
    
    <div>
      <h1 className="text-4xl text-center mb-10 font-semibold">List of emp</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {emps.map((empobj)=>(
          <div key={empobj._id} className=" bg-blue-200 p-6 rounded-4xl text-center m-auto hover:shadow-lg mb-4 ">
            <p>{empobj.email}</p>
            <p>{empobj.name}</p>
            <div className="flex justify-around gap-2">
              <button onClick={()=>gotoemployee(empobj)}className="bg-amber-400 p-2 rounded-2xl text-white hover:shadow-lg "> view</button>
              <button onClick={()=>gotoditemployee(empobj)} className="bg-green-400 p-2 rounded-2xl text-white hover:shadow-lg">edit</button>
              <button onClick={()=>deleteempbyid(empobj._id)}className="bg-fuchsia-400 p-2 rounded-2xl text-white hover:shadow-lg">delete</button>
              </div>
            </div>
        ))}
      </div>
      </div>
  );
}

export default Listofemp