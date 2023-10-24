function Login(){
     return(
        <form className="Ingresar">
            <h4>Login</h4>
            <label>Nombre de usuario</label>
            <input type="usuario" name="usuario" id="usuario_id" placeholder="Escribe tu Usuario" ></input>
            <br/>
            <label>contraseña</label>
            <input type="password" name="password" id="password_id"placeholder="Ingrese su password"></input>

                
           
            <button type="submit">Login</button>
            
            
        </form>
        
    
        
    )
}

 export default Login
