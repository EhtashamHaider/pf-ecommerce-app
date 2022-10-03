import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductsRow({category}) {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])


    const truncate=(text)=>{
        return text.length > 40 ? text.substring(0,40) + '...' : text;
    }


    return (

        <>
            <div className='productsRow' style={{ display: 'flex', overflowX: 'scroll' ,padding:'1rem 0.5rem'}}>
                {products.length !== 0 && products.map((product) =>
                    <ProductCard product={product} truncate={truncate} />
                )}
            </div>

        </>


    )
}
