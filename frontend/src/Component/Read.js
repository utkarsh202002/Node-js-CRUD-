import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    const [data,setData]=useState([])
    function getData(){

        axios.get('http://localhost:8000/get-all')
        .then((res)=>{
            // console.log(res.data);
            setData(res.data)
        })
    }
    // function check(id){
    //     console.log(data);

    //     console.log(id)
    // }



    function handleDeleted(id){

        axios.delete(`http://localhost:8000/delete/${id}`).
        then(()=>{
            getData();
        })
    }
    
    const setLocalStorage=(id,name,email,age,height,weight,healthGoals)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("age",age)

        localStorage.setItem("height",height)
        localStorage.setItem("weight",weight)
        localStorage.setItem("healthGoals",healthGoals)



    }

    useEffect(() => {
        getData();
       
     
    }, [])
    
  return (
    <>
    <h2>Read</h2>
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Height</th>
      <th scope="col">weight</th>
      <th scope="col">HealthGoals</th>
    </tr>
  </thead>
  {/* {
    data.map((eachData)=>{
        return(
            <>
             <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>{eachData.age}</td>
      <td>{eachData.height}</td>
      <td>{eachData.weight}</td>
      <td>{eachData.healthGoals}</td>
      <Link to="/update">
      <td><button className='btn-success'onClick={()=>setLocalStorage(eachData.id,eachData.name,eachData.email,eachData.age,eachData.height,eachData.weight,eachData.healthGoals)}>Edit</button></td>
      </Link>
      <td><button className='btn-danger' onClick={()=>check(eachData.id)}>Delete</button></td>
    </tr>
   
  </tbody>


            </>
        )

    })
 
   } */}

{
  data.map((eachData) => (
    <tbody key={eachData.id}>
      <tr>
        <th scope="row">{eachData.id}</th>
        <td>{eachData.name}</td>
        <td>{eachData.email}</td>
        <td>{eachData.age}</td>
        <td>{eachData.height}</td>
        <td>{eachData.weight}</td>
        <td>{eachData.healthGoals}</td>
        <td>
          <Link to="/update">
            <button
              className="btn btn-success"
              onClick={() =>
                setLocalStorage(
                  eachData.id,
                  eachData.name,
                  eachData.email,
                  eachData.age,
                  eachData.height,
                  eachData.weight,
                  eachData.healthGoals
                )
              }
            >
              Edit
            </button>
          </Link>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleted(eachData.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  ))
}





   
</table>


    </>
  )
}

export default Read