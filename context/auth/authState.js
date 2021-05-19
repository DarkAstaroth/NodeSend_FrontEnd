import React, { useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';
import { USUARIO_AUTENTICADO } from '../../types/';

const AuthState = ({ children }) => {

    // Definir un state inicial
    const initialState = {
        token: '',
        autenticado: null,
        usuario: null,
        mesaje: null
    }

    // Definir el reducer
    const [state, dispach] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const registrarUsuario = datos => {
        console.log(datos);
    }

    // usuario autenticado
    const usuarioAutenticado = nombre => {
        dispach({
            type: USUARIO_AUTENTICADO,
            payload: nombre
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                usuarioAutenticado
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthState;