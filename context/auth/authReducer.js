import { LIMPIAR_ALERTA, LOGIN_ERROR, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_ERROR:
        case REGISTRO_EXITOSO:
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje : action.payload
            }
        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje: null
            }
        default:
            break;
    }
}

export default authReducer;