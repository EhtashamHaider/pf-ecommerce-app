import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import swal from 'sweetalert';
import ProductsRow from './ProductsRow';

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(data);
            } catch (error) {
                swal('Server Failed', 'Failure in fetching categories', 'error');
            }
        }

        fetchCategories();
    }, [])

    return (
        <>
            {categories.length !== 0 && categories.map(category => {
                return (
                    <>
                        <div className="productCategory" style={{padding:'1rem'}}>

                            <h5>{category}</h5>
                            <ProductsRow category={category} />
                        </div>
                    </>
                );
            })}
        </>
    )
}
