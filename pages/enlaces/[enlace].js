import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';
import React, { useState } from 'react';

export async function getServerSideProps({ params }) {
    const { enlace } = params;

    const resultado = await clienteAxios.get(`/api/enlaces/${enlace}`);
    return {
        props: {
            enlace: resultado.data
        }
    }
}

export async function getServerSidePaths() {
    const enlaces = await clienteAxios.get('/api/enlaces');
    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: { enlace: enlace.url }
        })),
        fallback: false,
    }
}

const Enlace = ({ enlace }) => {

    const [tienePassword, setTienePassword] = useState(enlace.password);
    console.log(tienePassword);

    const verificarPassword = e => {
        e.preventDefault();
        console.log('verificando....');
    }

    return (
        <Layout>
            {
                tienePassword ? (
                    <>
                        <p className="text-center">Este enlace esta protegido por un password, colocalo a continuacion</p>
                        <div className="flex justify-center mt-5">
                            <div className="w-full max-w-lg">
                                <form
                                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                                    onSubmit={ e=> verificarPassword(e) }
                                >
                                    <div className="mb-4">

                                        <label
                                            htmlFor="nombre"
                                            className="block text-black text-sm font-bold mb-2">
                                            Password
                                    </label>

                                        <input
                                            className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Password del archivo"
                                        />

                                    </div>

                                    <input
                                        className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                                        type="submit"
                                        value="Validar password..." />
                                </form>
                            </div>
                        </div>
                    </>
                )
                    : (
                        <>
                            <h1 className="text-4l text-center text-gray-700"> Descarga tu archivo:</h1>
                            <div className="flex items-center justify-center mt-10">
                                <a
                                    href={`${process.env.backendURL}/api/archivos/${enlace.archivo}`}
                                    className="bg-red-500 text-center px-10 py-4 rounded uppercase font-bold text-white cursor-pointer">Aqui</a>
                            </div>
                        </>
                    )
            }

        </Layout >
    );
}

export default Enlace;