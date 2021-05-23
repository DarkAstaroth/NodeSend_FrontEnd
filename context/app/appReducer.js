import { AGREGAR_PASSWORD, CREAR_ENLACE_EXITO, LIMPIAR_STATE, MOSTRAR_ALERTA, OCULTAR_ALERTA, SUBIR_ARCHIVO, SUBIR_ARCHIVO_ERROR, SUBIR_ARCHIVO_EXITO } from "../../types";


const appReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_ALERTA:
        case SUBIR_ARCHIVO_ERROR:
            return {
                ...state,
                mensaje_archivo: action.payload,
                cargando: null
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje_archivo: null
            }
        case SUBIR_ARCHIVO_EXITO:
            return {
                ...state,
                nombre: action.payload.nombre,
                nombre_original: action.payload.nombre_original,
                cargando: null
            }
        case SUBIR_ARCHIVO:
            return {
                ...state,
                cargando: true
            }
        case CREAR_ENLACE_EXITO:
            return {
                ...state,
                url: action.payload
            }
        case LIMPIAR_STATE:
            return {
                ...state,
                mensaje_archivo: null,
                nombre: '',
                nombre_original: '',
                cargando: null,
                descargas: 1,
                password: '',
                autor: null,
                url: ''
            }
        case AGREGAR_PASSWORD:
            return {
                ...state,
                password : action.payload
            }
        default:
            break;
    }
}

export default appReducer;