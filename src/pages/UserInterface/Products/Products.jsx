import React, { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import products from '../../../../public/data.json';

const Products = () => {
    // const [products,setProducts] = useState([]);
    // useEffect(() =>{
    //   fetch('http://localhost:5000/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    // },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center my-10">
        {
            products.map((product,index) => <Card key={index} img={product.img} title={product.productName}></Card> )
        }
    </div>
  );
};

export default Products;
