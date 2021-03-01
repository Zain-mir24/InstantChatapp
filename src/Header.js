import React from 'react'
const headerStyle={
    backgroundColor :"#76ff03",
    borderRadius : "20px",
    height:"40px",
}
const WordStyle={
    padding:"1%",
    fontSize:"30px",

}
function Header() {
    return (
        <div>
            <header style={headerStyle}>
             <p style={WordStyle}> Kik </p>
            </header>
        </div>
    )
}

export default Header
