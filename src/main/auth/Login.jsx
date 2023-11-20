import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../../config/firebase';
import Loading from '../../components/Loading';

function Login() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState(
        {
            username: '',
            password: ''
        }
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        firebase.auth.signInWithEmailAndPassword(form.username, form.password)
            .then((res) => {
                history.push('/');
                setIsLoading(false);
            })
            .catch((err) => {
                console.log('Error', err);
                setIsLoading(false);
            });
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form, [name]: value})
    }

    return (
        <div className="app">
            <Form onSubmit={handleSubmit}>
                <div className="row text-center">
                    <h1 className="col-xs-12">Credenciales</h1>
                </div>
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
                    {!isLoading &&
                    <Button variant="primary" type="submit" className="col-xs-12 col-md-6 offset-xs-0 offset-md-3">
                        Ingresar
                    </Button>}
                    {isLoading && <Loading/>}
                </div>
            </Form>
        </div>

    )
}

export default Login;
