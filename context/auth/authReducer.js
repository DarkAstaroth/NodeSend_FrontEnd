import { LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXISTOSO, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_ERROR:
        case REGISTRO_EXITOSO:
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje: null
            }
        case LOGIN_EXISTOSO:
            localStorage.setItem('ReactSendToken',action.payload)
            return {
                ...state,
                token: action.payload,
                autenticado : true
            }
        default:
            break;
    }
}

export default authReducer;