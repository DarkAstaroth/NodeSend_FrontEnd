import Layout from '../../components/Layout';
import clienteAxios from '../../config/axios';

export async function getStaticProps() {
    
}

export async function getStaticPaths() {
    
}

export default () => {
    return (
        <Layout>
            <p>desde enlace js</p>
        </Layout>
    );
}