import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';


function ProductDetail(
    {id, title, price, thumbnail}
) {
    useEffect(() => {}, [title]);
    return (
        <div className="col-xs-12 col-md-4 p-3">
            <Card style={{ width: '18rem' }}>
                <div className="text-center">
                    <Card.Img variant="top" src={thumbnail} className="w-auto" alt=""/>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>$ {price}</Card.Text>
                    <Card.Link href={`/producto/${id}`}>Ver Detalle</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductDetail;
