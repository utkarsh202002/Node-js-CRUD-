const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors())


const admin=require("firebase-admin")

const credentials=require("./key.json")

admin.initializeApp({

    credential:admin.credential.cert(credentials)
})



app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.post('/create',async(req,res)=>{

   try {
     const id=req.body.email
     const user={
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        weight:req.body.weight,
        height:req.body.height,
        healthGoals:req.body.healthGoals

        
         
 
     }
     const response=await db.collection("users").add(user)
     console.log(user)
 
     res.send(response)
   } catch (error) {
    res.send(error)
    
   }



})

//to get all users

// app.get('/get-all',async(req,res)=>{
//     try {
//         const user= db.collection("users")
    
//         const response=await user.get()
    
//         let arrResponse=[];
    
//         response.forEach(doc=>{
//             arrResponse.push(doc.data())
//         })
    
//         res.send(arrResponse)
//     } catch (error) {

//         res.send(error)
        
//     }







// })

app.get('/get-all', async (req, res) => {
    try {
        const user = db.collection("users");
        const response = await user.get();
        
        let arrResponse = [];
        
        response.forEach(doc => {
            arrResponse.push({
                id: doc.id, // Accessing the document ID
                ...doc.data() // Spreading the document data
            });
        });
        
        res.send(arrResponse);
    } catch (error) {
        res.status(500).send(error); // Sending a status code for better error handling
    }
});


//to get user specific to id

app.get("/get/:id",async(req,res)=>{
    try {
        const user= db.collection("users").doc(req.params.id)
        
        const response=await user.get()
    
        res.send(response.data())
    } catch (error) {
        res.send(error)
        
    }
    





})

//updating the info by the id

app.put("/update/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const newEmail=req.body.email
        const newName=req.body.name
        const newAge=req.body.age
        const newHeight=req.body.height
        const newWeight=req.body.weight
        const newHealthGoals=req.body.healthGoals
    
        const user= await db.collection("users").doc(id).update({
            email:newEmail,
            name:newName,
            age:newAge,
            weight:newWeight,
            height:newHeight,
            healthGoals:newHealthGoals


    
    
        })
    
        res.send(user)
    } catch (error) {
        res.send(error)
        
    }

   

        
    







})


// to delete user by id

app.delete("/delete/:id",async(req,res)=>{
try {
    
        const user=await db.collection("users").doc(req.params.id).delete()
    
        res.send(user)
} catch (error) {
    res.send(error)
    
}






})

const db=admin.firestore()

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("Server us running"+`${PORT}`)



})
