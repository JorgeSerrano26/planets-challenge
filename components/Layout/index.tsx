import Head from 'next/head'
import packageConfig from '../../package.json';

const { name, author } = packageConfig;

const Layout: React.FC = ({ children }) => {
    return <>
        <Head>
            <title>{name} - {author.name}</title>
        </Head>
        {children}
    </>
}

export default Layout;
