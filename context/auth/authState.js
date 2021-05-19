import React, { useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';
import { LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXISTOSO, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from '../../types/';
import clienteAxios from '../../config/axios';

const AuthState = ({ children }) => {

    // Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('ReactSendToken') : null,
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    // Definir el reducer
    const [state, dispach] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try {
            
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            dispach({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            });

        } catch (error) {
            console.log(error);
            dispach({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            });
        }

        setTimeout(() => {
            dispach({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
    }

    // autenticar usuarios
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('api/auth', datos);
            dispach({
                type: LOGIN_EXISTOSO,
                payload: respuesta.data.token
            });
        } catch (error) {
            console.log(error.response.data.msg);
            dispach({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }

        setTimeout(() => {
            dispach({
                type: LIMPIAR_ALERTA
            })
        }, 3000);
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
                usuarioAutenticado,
                iniciarSesion
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthState;