import React from "react";

export default function Login()
{
    const[response,setresponse]=React.useState("")
    const[form,setForm]=React.useState({
        Name:"",
        Email:""
      
    }) 
    function Change(event)
    {
        const{name,value}=event.target
        setForm(prev=>({...prev,[name]:value}))
    }
    function Lin()
    {
        fetch("https://localhost:7049/api/login",{
            method:'POST',
            headers:{
                'Content-type':'application/json',
               
            },
            body:JSON.stringify(form)
        }).then(res=>res.json()).then(json=>{
            if(json.token)
            {
                localStorage.setItem('Token', json.token)
                localStorage.setItem('Id', json.id)
                window.location.href = '/products';
            }
            else{
                setresponse("Error")
            }
            
         
        })  }
        return(
            <div>
                <label for="Name">Name</label>
            <input type="text" name="Name" onChange={Change} value={form.Name}></input>
            <br/><br/>
            <label for="Email">Email</label>
            <input type="text" name="Email" onChange={Change} value={form.Email}></input>
            <br/><br/>
            <button onClick={Lin} >Login</button>
            {response}
            <br></br>
            <a href="/regis">register</a>
            </div>
        )
       
       
  
}