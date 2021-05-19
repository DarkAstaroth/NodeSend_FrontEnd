import { USUARIO_AUTENTICADO } from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload
            }
        default:
            break;
    }
}

export default authReducer;