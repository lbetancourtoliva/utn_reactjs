import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Registro extends Component {
    render() {
        function handleSubmit(e) {
            e.preventDefault();
            alert('Registro enviado exitosamente!');
        }
        return (
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicName">
                        <Form.Label>Nombre(s)</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicLastName">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email"/>
                        <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicCellphone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number"/>
                        <Form.Text className="text-muted">
                            Nunca compartiremos su teléfono con nadie más.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <Form.Group className="col-xs-12 col-md-6 p-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </div>
                <div className="row mt-3">
                    <Button variant="primary" type="submit" className="col-xs-12 col-md-6 offset-xs-0 offset-md-3">
                        Registrar
                    </Button>
                </div>
            </Form>
        )
    }
}
export default Registro;