import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function Products({ data, limit }) {
    const [products, setProducts] = useState([]);

    // Fetch Products 
    async function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }

    // 
    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        

        <div className=' grid md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-4 mx-4 md:mx-0 md:gap-y-12'>
            {
                products?.length > 0 ?
                    (
                        data?.length > 0 ?
                            (
                                data.map((product, index) => {
                                    return (
                                        <ProductCard key={product.id} props={product} />
                                    )
                                })
                            )

                            :

                            (
                                products.map((product, index) => {
                                    return (
                                        index < limit &&  <ProductCard key={product.id} props={product} />
                                    )
                                })
                            )
                    )
                    :
                    (
                        <span className="loader"></span>
                    )
            }
        </div>
    )
}

export default Products