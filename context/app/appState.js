import React, { useReducer } from 'react'
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';
import appContext from './appContext';
import appReducer from './appReducer';

const AppState = ({ children }) => {

    const initialState = {
        mensaje_archivo: ''
    }

    // crear dispatch y state
    const [state, dispatch] = useReducer(appReducer,initialState);

    // Muestra una alerta
    const mostrarAlerta = msg => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: msg
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 3000);
    }
    return (
        <appContext.Provider
            value={{
                mensaje_archivo:state.mensaje_archivo,
                mostrarAlerta
            }}
        >
            {children}
        </appContext.Provider>
    );
}

export default AppState;