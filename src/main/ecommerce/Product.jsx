import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
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
            <div className="app">
                <Loading/>
            </div>
        )
    } else {
        return (
            <div className="app">
                <h1>{product.title}</h1>
                <img src={product.thumbnail} alt=""/>
                <p>$ {product.price}</p>
                <Button variant="primary">
                    Comprar
                </Button>
                <br/>
                <Link to="/">
                    Regresar a la tienda
                </Link>
            </div>
        )
    }
}

export default Product;