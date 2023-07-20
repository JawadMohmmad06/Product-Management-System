import React from "react";
export default function Regis()
{
    const[response,setresponse]=React.useState("")
    const[Form,setFrom]=React.useState({
        Name:"",
        Email:""
    })
    function Change(event)
    {
        const{name,value}=event.target
        setFrom(prev=>({...prev,[name]:value}))
    }
    function Reg()
    {
        fetch("https://localhost:7049/api/adduser",{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':'*'
                
            },
            body:JSON.stringify(Form)
        }).then(res=>console.log("ddd",res))
        setresponse("Done")
        

    }
    return(
        <div>
        <label for="Name">Name</label>
            <input type="text" name="Name" onChange={Change} value={Form.Name}></input>
            <br/><br/>
            <label for="Email">Email</label>
            <input type="text" name="Email" onChange={Change} value={Form.Email}></input>
            <br/><br/>
            <button onClick={Reg} >Register</button><br></br>
            {response}
            <br></br>
            <a href="/login">login</a>
        </div>
    )
}