import React from "react"
function ProductCard({info})
{
    return (
        <div className = {`info.id card`}>
            <div>
                <img src = {info.src}></img>
            </div>  
            <h4 className = "title">{info.section}</h4>
            <div className = "info">
                <h4>{info.name}</h4>
                <h4>{`price: ${info.price}`}</h4>
            </div>
            <button id = {info.id} >Buy</button>
        </div>
    )
}
export default ProductCard;
