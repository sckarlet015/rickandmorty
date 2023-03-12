//Librerias
import React from 'react'
//Funciones externas
import validation from "./validation";
//Estilos
import style from "./Form.module.css"

function Form(props) {
    //Declaración de los estados de los inputs
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({username: '', password: ''});
    //Función para setear los valores del input
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }
    //Función de evnto de los botones
    const handleLogin = () => {
        props.login(userData);
    } 

    return(
        <div className={style.conteiner}>
            <form className={style.form}>
                <span className={style.login}>Login</span>
                <label>
                    <input 
                        name="username" 
                        type="text" 
                        value={userData.username}
                        placeholder="Correo"
                        onChange={handleInputChange}
                        className={style.input}
                        />
                </label>
                <p className={style.danger}>{errors.username}</p>

                <label>
                    <input 
                        name="password" 
                        type="password" 
                        value={userData.password}
                        placeholder="Contraseña"
                        onChange={handleInputChange}
                        className={style.input}
                    />
                </label>
                <p className={style.danger}>{errors.password}</p>

                <div>
                    <button 
                    onClick={handleLogin}
                    className={style.boton}
                    value="Entrar">Entrar</button>
                    <button className={style.boton}>Registrarse</button>
                </div>
                <div>
                    <button className={style.botonR}>Recuperar contraseña</button>
                </div>
            </form>
        </div>
    )
}

export default Form