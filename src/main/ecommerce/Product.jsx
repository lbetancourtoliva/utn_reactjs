import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {getProductById} from '../../services/ProductService';
import Loading from '../../components/Loading';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(
        () => {
            const result = async () => {
                try {
                    const responseData = await getProductById(id);
                    setProduct(responseData.data);
                    setIsLoading(false);
                } catch (e) {
                    console.log(e)
                }
            }
            result()
        },
        [id]
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
                <h1>{product.title}</h1>
                <img src={product.thumbnail} alt=""/>
                <p>$ {product.price}</p>
                <Button variant="primary">
                    Comprar
                </Button>
            </div>
        )
    }
}

export default Product;