import React, {useEffect} from 'react';
import Card from 'react-bootstrap/Card';


function ProductDetail(
    {id, title, category, price, thumbnail}
) {
    useEffect(() => {}, [title]);
    return (
        <div className="col-xs-12 col-md-4 p-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumbnail} alt=""/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                    <Card.Text>$ {price}</Card.Text>
                    <Card.Link href={`/producto/${id}`}>Ver Detalle</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductDetail;
