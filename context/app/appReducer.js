import { MOSTRAR_ALERTA, OCULTAR_ALERTA, SUBIR_ARCHIVO, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from "../../types";


const appReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
        case SUBIR_ARCHIVO_ERROR:
            return {
                ...state,
                mensaje_archivo: action.payload,
                cargando:null
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje_archivo:null
            }
        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                cargando:null
            }
        case SUBIR_ARCHIVO:
            return {
                ...state,
                cargando:true
            }
        default:
            break;
    }
}

export default appReducer;