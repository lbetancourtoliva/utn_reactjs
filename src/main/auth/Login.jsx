import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [form, setForm] = useState(
        {
            username: '',
            password: ''
        }
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        alert(`Ingreso exitoso!`)
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form, [name]: value})
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <Form.Group className="col-xs-12 col-md-6 offset-xs-0 offset-md-3" controlId="formBasicName">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="name" value={form.username} onChange={handleChange}/>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="col-xs-12 col-md-6 offset-xs-0 offset-md-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </div>
                <div className="row mt-3">
                    <Button variant="primary" type="submit" className="col-xs-12 col-md-6 offset-xs-0 offset-md-3">
                        Ingresar
                    </Button>
                </div>
            </Form>
        </div>

    )
}


export default Login;
