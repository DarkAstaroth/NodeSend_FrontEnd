import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';

export async function getStaticProps() {
    const resultado = await clienteAxios.get('/api/enlaces/ReMggKwwY');
    return {
        props: {
            enlace: resultado.data
            
        }
    }
}

export async function getStaticPaths() {
    const enlaces = await clienteAxios.get('/api/enlaces');
    return {
        paths: enlaces.data.enlaces.map(enlace => ({
            params: {enlace:enlace.url}
        })),
        fallback: false,
    }
}

const Enlace = ({ enlace }) => {
    return (
        <Layout>
            <p>desde enlace js</p>
        </Layout>
    );
}

export default Enlace;