import React from 'react'
const inputstyling={
    marginTop:"40px"
}
const buttonstyle={
    borderRadius:"25px"
}
function Login() {
    const [email,setemail]=React.useState("")
    // const Register=(event)=>{
    //   event.preventDefault();
    //   // auth.createUserWithEmailAndPassword(email, password).then((auth) => {
    //   //   // it successfully created a new user with email and password
    //   //   if (auth) {
    //   //     history.push("/");
    //   //   }
    //   // });
    // }
    return (
      
        <div>
            <form>
            <input style={inputstyling} type="email" placeholder="EnterYourEmail" onChange= {e=> (setemail.target.value)}/>
            
            <p>Creating your kik account</p>
            <button style={buttonstyle}>Create your Kik Account</button>
            </form>
        </div>
    )
}

export default Login
