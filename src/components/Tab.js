import React from "react"
const Tab = ({productInfo,changeProductInfo,setFilter})=>{
    document.addEventListener("DOMContentLoaded",()=>{
        setFilter(productInfo)
    })
    const handleTab = (e)=>{
        let dataId = e.target.dataset.id 
        if(dataId === "all")
        {
            setFilter(productInfo)
        }
        else
        {
        setFilter(productInfo.filter(a => a.section === dataId))
        }
    }
    return ( 
        <div className = "tabs">
            <div onClick = {handleTab} className = "innerTabs">
                <button data-id = "all">All</button>
                <button data-id = "watch">Watch</button>
                <button data-id = "shoes">Shoes</button>
                <button data-id = "clothes">Clothes</button>
                <button data-id = "phones">Phones</button>
            </div>
        </div>
    )
}
export default Tab;