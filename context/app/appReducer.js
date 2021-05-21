import { MOSTRAR_ALERTA } from "../../types";


const appReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }
        default:
            break;
    }
}

export default appReducer;