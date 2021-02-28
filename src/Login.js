import React from 'react'

function Login() {
    const [email,setemail]=React.useState("")
    const Register=(event)=>{
      event.preventDefault()
    }
    return (
      
        <div>
            <form>
            <input type="email" placeholder="EnterYourEmail" onChange= {e=> (setemail.target.value)}/>
            
            <p>Creating your kik account</p>
            <button>Create your Kik Account</button>
            </form>
        </div>
    )
}

export default Login
