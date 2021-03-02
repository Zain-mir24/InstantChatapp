import React from 'react'
const inputstyling={
    marginTop:"20px"
}
const buttonstyle={
    borderRadius:"25px"
}
const heading={
    backgroundColor:""
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
            <h1>Login Form</h1>
            <input style={inputstyling} type="email" placeholder="EnterYourEmail" onChange= {e=> (setemail.target.value)}/>
            
            <p>Dont have a kik account?</p>
            <button style={buttonstyle}>Create your Kik Account</button>
            </form>
        </div>
    )
}

export default Login
