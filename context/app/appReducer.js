import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";


const appReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje_archivo:null
            }
        default:
            break;
    }
}

export default appReducer;