import React from 'react'
const headerStyle={
    backgroundColor :"#76ff03",
    borderRadius : "20px",
    height:"50px"
}
const WordStyle={
    padding:"5px"
}
function Header() {
    return (
        <div>
            <header style={headerStyle}>
             <p style={WordStyle}>  Kik </p>
            </header>
        </div>
    )
}

export default Header
