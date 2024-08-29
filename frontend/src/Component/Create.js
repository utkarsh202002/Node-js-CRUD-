import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Create() {

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [age,setAge]= useState("")
  const [height,setHeight]= useState("")
  const [weight,setWeight]= useState("")
  const [healthGoals,setHealthGoals]= useState("")

  const history=useNavigate();

  const header={"Access-Control-Allow-Origin":"*"}

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clcked");
    axios.post(
      'http://localhost:8000/create',
      {name:name,email:email,age:age,height:height,weight:weight,healthGoals:healthGoals},
      header
    ).then(()=>{
      history('/read')
    })
  };
  return (
    <>
    <h2>Create</h2>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setAge(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Height</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setHeight(e.target.value)}/>
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
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>


  
    
    
    
    </>
  )
}

export default Create