import { REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
            return {
                ...state,
                mensaje : action.payload
            }
        default:
            break;
    }
}

export default authReducer;