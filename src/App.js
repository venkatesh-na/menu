import React, { useState } from "react"
import product from "./Menu"
import Tab from "./components/Tab"
import Container from "./components/Container.js"
import "./styles/style.css"
const App = ()=>{
  const [productInfo,changeProductInfo] = useState(product)
  const [filter,setFilter] = useState([])
  return ( 
    <div className = "menu">
      <Tab setFilter = {setFilter} productInfo = {productInfo} changeProductInfo = {changeProductInfo}/>
      <Container filter = {filter} productInfo = {productInfo}/>
    </div>
  )
}
export default App;