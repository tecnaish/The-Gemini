import React from 'react'
import{Navbar} from "react-bootstrap"
const NavBar = ({FilterItem,menuList}) => {
  return (
    <>

     <Navbar className="navbar" > <span className="hname" >The Gemini</span>
      <div className="btn-group" >
          {
              menuList.map((curElem)=>{
                  return(<button className="btn-group__item" 
                  onClick={()=>FilterItem(curElem)} >
                  {curElem}</button>
                  )
              })
          }
        
      </div>
    </Navbar> 
    </>
  )
}

export default NavBar;
