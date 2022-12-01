import React from 'react'
import {Image} from 'react-bootstrap'
const MenuCard = ({menuData}) => {
    console.log(menuData)
  return (
    <>
    <section className="main-card--cointainer" >
    {menuData.map((curElem)=>{
       
        return(
<div className="card-container" key={curElem.id} >
        <div className="card" >
          <div className="card-body" >
            <span className="card-number card-circle subtle">{curElem.id} </span>
        <span className="card-author subtle">{curElem.category} </span>
            <h1 className="card-title">{curElem.name} </h1>
            <span className="card-discription subtle">
                {curElem.description}
            </span>
          <div className="card-read">Read</div>
         </div>
         <Image src={curElem.image} 
         alt="image"
         className="card-media" ></Image>
         <span className="card-tag subtle">Order Now</span>
        </div>
      </div> 
        )
    })}
     </section>
    </>
  )
}

export default MenuCard;
