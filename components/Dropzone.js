import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clienteAxios from '../config/axios';

const Dropzone = () => {

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log(acceptedFiles);

        // crear un form Data
        const formData = new FormData();
        formData.append('archivo', acceptedFiles[0]);

        const resultado = await clienteAxios.post('/api/archivos', formData);
        console.log(resultado);
    }, []);

    // Extraer contenido de dropzone
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

    const archivos = acceptedFiles.map(archivo => (
        <li key={archivo.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded list-none">
            <p className="font-bold text-xl"> {archivo.path}</p>
            <p className="text-sm text-gray-500">{(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB</p>
        </li>
    ));

    const crearEnlace = () => {
        console.log("Creando el enlace....");
    }

    return (
        <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">

            {acceptedFiles.length > 0
                ?
                <div className="mt-10 w-full">
                    <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
                    <ul>
                        {archivos}
                    </ul>
                    <button
                        type="button"
                        className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hove:bg-blue-800"
                        onClick={ ()=> crearEnlace()}
                    >
                        Crear enlace
                    </button>
                </div>
                :
                <div {...getRootProps({ className: 'dropzone w-full py-32' })}>
                    <input className="h-100" {...getInputProps()} />

                    <div className="text-center">
                        {
                            isDragActive
                                ?
                                <p className="text-2xl text-center text-gray-600"> Suelta el archivo</p>
                                :
                                <>
                                    <p className="text-2xl text-center text-gray-600">Selecciona un archivo y arrastralo aqui</p>
                                    <button
                                        className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
                                        type="button"
                                    >Seleccione archivos para subir</button>
                                </>
                        }
                    </div>
                </div>
            }

        </div>
    );
}

export default Dropzone;