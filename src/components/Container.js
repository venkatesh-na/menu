import React from "react"
import ProductCard from "./productCard";
const Container = ({filter})=>{
    return ( 
        <div className = "product-container">
            {filter.map(e => <ProductCard key = {e.id} info = {e}/>)}
        </div>
    )
}
export default Container;
