import { LIMPIAR_ALERTA, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_ERROR:
        case REGISTRO_EXITOSO:
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