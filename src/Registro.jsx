import React, { Component } from "react";

class Registro extends Component {
    render() {
        function handleSubmit(e) {
            e.preventDefault()
            alert(`Registro enviado exitosamente!`)
        }
        return (
            <form className="Registro">
                <label>Nombre</label>
                <input type="text" name="nombre" id="nombre_id"></input>
                
                <label>Apellido</label>
                <input type="text" name="apellido" id="apellido_id"></input>
                
                <label>Email</label>
                <input type="email" name="email" id="email_id"></input>
                
                <label>Teléfono</label>
                <input type="number" name="telefono" id="telefono_id"></input>
                
                <label>Password</label>
                <input type="password" name="password" id="password_id"></input>
                
                <label>Confirmar Password</label>
                <input type="password" name="confirmar_password" id="confirmar_password_id"></input>
                
                <button onClick={handleSubmit}>Registrar</button>
            </form>
        )
    }
}
export default Registro