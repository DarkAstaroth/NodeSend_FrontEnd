import React from 'react'

const Formulario = () => {
    return (
        <div classNamw="w-full mt-20">
            <div>
                <label className="text-lg text-gray-800"> Eliminar tras:</label>
                <select className="appereance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 rounded leading-none focus:outline-none focus:border-gray-500">
                    <option value="" selected disable>--- Seleccione ---</option>
                    <option value="1"> 1 Descargas</option>
                    <option value="5"> 5 Descargas</option>
                    <option value="10"> 10 Descargas</option>
                    <option value="20"> 20 Descargas</option>

                </select>
            </div>
        </div>
    );
}

export default Formulario;