import React from 'react'
const headerStyle={
    backgroundColor :"#76ff03",
    borderRadius : "20px",
    height:"20px",
}
const WordStyle={
    padding:"6px",
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
