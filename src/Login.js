import React from 'react'
const inputstyling={
    marginTop:"20px",
    height:"50px",
    borderRadius:"25px"
}
const buttonstyle={
    borderRadius:"25px"
}

const formstyling={
  backgroundColor:"#81c784",
    marginLeft:"30%",
    marginRight:"30%",
    height:"400px"
}
const headerStyle={

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
            <form style={formstyling}>
            <h1>Login Form</h1>
            <div>
            <svg   xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
            <input style={inputstyling}  type="email" placeholder="EnterYourEmail" onChange= {e=> (setemail.target.value)}/>
            </div>
            <p>Dont have a kik account?</p>
          <button onclick="window.location='./mainpage.js'" style={buttonstyle}>Create your Kik Account</button>  
            </form>
        </div>
    )
}

export default Login
