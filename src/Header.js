import React from 'react'
const headerStyle={
    backgroundColor :"#76ff03",
    borderRadius : "20px",
    height:"40px",
    marginBottom : "1px"
}
const WordStyle={
    padding:"1px",
    fontSize:"35px",

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
