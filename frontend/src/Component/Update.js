import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
    const [id,setId]=useState("")

    const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [age,setAge]= useState("")
  const [height,setHeight]= useState("")
  const [weight,setWeight]=useState("")
  const [healthGoals,setHealthGoals]=useState("")


  const navigate=useNavigate();



  useEffect(() => {
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
    setAge(localStorage.getItem("age"))
    setHeight(localStorage.getItem("height"))
    setWeight(localStorage.getItem("weight"))
    setHealthGoals(localStorage.getItem("setHealthGoals"))
    




    
  
    
  }, [])

  function check(){
    console.log(localStorage.getItem("id"));


  }
 

  const handleUpdate=(e)=>{
    e.preventDefault();
    

    axios.put(`http://localhost:8000/update/${localStorage.getItem("id")}`,
    {
        name:name,
        email:email,
        age:age,
        height:height,
        weight:weight,
        healthGoals:healthGoals



    }).then(()=>{
        navigate("/read")
    })
  }
  
  return (
    <>
    <h2>Update</h2>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    value={email}
    onChange={(e)=>setEmail(e.target.value)} 
     />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Height</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    value={height}
    onChange={(e)=>setHeight(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">weight</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setWeight(e.target.value)}/>
  </div>


  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">HealthGoals</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
  onChange={(e)=>setHealthGoals(e.target.value)}></textarea>
</div>
 

  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}
  >Update</button>
</form>

    </>
  )
}

export default Update