import React, {useEffect, useState} from 'react';
import {getProducts} from '../services/ProductService';
import ProductDetail from './ProductDetail';
import Loading from './Loading';

function ProductList() {
    const title = 'Listado de productos';
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getProducts();
                    setProducts(responseData.data.results);
                    setIsLoading(false);
                } catch (e) {
                    console.log(e)
                }

            }
            result();
        },
        []
    )
    if (isLoading) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{title}</h1>
                <div className="row">
                    {products.map(product => <ProductDetail {...product} />)}
                </div>
            </div>
        )
    }
}

export default ProductList;
