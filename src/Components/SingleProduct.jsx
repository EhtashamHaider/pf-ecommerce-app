import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../Styles/singleProd.css';
import rating from '../assets/rating.png'

export default function SingleProduct() {
    const [products, setProducts] = useState([]);

    function renderStars(){
        const starList=[];
        for(let i=0;i<Math.ceil(products[0]?.rating.rate);++i){
            starList.push(<img src={rating}></img>)
        }
        return starList;
    }


    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(`https://fakestoreapi.com/products`);
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, [])  
  return (
    <div className='singleProduct container shadow mt-3 p-3'>
        <div className="imageSection">
            <img src={products[0]?.image} alt="saas" />
        </div>
        <div className="description">
            <h5>{products[0]?.title}</h5>
            <p>{renderStars()} ({products[0]?.rating.count}) ratings</p>
            <hr />
            


        </div>

    </div>
  )
}
