import React,{useState} from 'react'
import "./style.css" 
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard"
import NavBar from "./NavBar"


const uniqueList=[
  ...new Set(
    Menu.map((curElem)=>{
return curElem.category;
    })
  ),
  "all",
]
console.log(uniqueList)

const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList]=useState(uniqueList)

  const FilterItem=(category)=> {
    
  const updatedList=Menu.filter((curElem)=>{
    return curElem.category===category
  })
  setMenuData(updatedList)    
    
  }
  return (
    <>
    <NavBar FilterItem={FilterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant;
