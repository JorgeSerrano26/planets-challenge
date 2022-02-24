import classNames from 'classnames';
import styles from './styles.module.css';

interface IPlanetLink {
    name: string;
    url: string;
}

interface IHeader {
    planets?: IPlanetLink[]
}

const Header: React.FC<IHeader> = ({ planets }) => {
    const renderLinks = () => planets?.map(({ name, url }, index) => <li key={`${name}-${index}`}><a href={url}>{name}</a></li>)

    const headerClassnames = classNames(styles.header)
    return <header id="header" className={headerClassnames}>
        <p>THE PLANETS</p>
        <ul className={styles.links_list}>
            {
                renderLinks()
            }
        </ul>
    </header>
}

export default Header;