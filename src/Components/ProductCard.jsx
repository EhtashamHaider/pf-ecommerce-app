import React from 'react'
import '../Styles/productCard.css'
import rating from '../assets/rating.png';

export default function ProductCard({ product, truncate }) {
    function renderStars(){
        const starList=[];
        for(let i=0;i<Math.ceil(product.rating.rate);++i){
            starList.push(<img src={rating}></img>)
        }
        return starList;
    }
    return (
        <div className="productCard mx-2 shadow" >
            <div className="productImage">
                <img src={product.image} className="mx-auto" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="productname">
                <h5>{truncate(product.title)}</h5>

            </div>
            <div className="productPrice">
                <h5>{product.price}</h5>

            </div>
            <div className="rating">
                <p>{renderStars()} ({product.rating.count})</p>
            </div>
            <div className="addToCart">
                <button className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    )
}
