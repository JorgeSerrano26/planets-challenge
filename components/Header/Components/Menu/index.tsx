/**
 * Dependencies
 */
import Image from 'next/image';

/**
 * Styles
 */
import styles from '../../index.module.scss';

interface IMenuPlanets {
    name: string;
    theme: string;
}

interface IPlanetItem extends IMenuPlanets {
    onClickItem: TOnClickItem;
} 

type TOnClickItem = (name: string) => void;

type TMenu = {
    planets?: IMenuPlanets[]
    onClickItem: TOnClickItem;
}

const MenuItem: React.FC<IPlanetItem> = ({ name, onClickItem, theme }) => <li onClick={() => onClickItem(name)}>
    <span className={styles.menu_item_dot} style={{ backgroundColor: theme }} />
    <p className={styles.planet_name}>{name}</p>
    <span className={styles.menu_item_arrow}>
        <Image src="/assets/icon-chevron.svg" alt='Menu arrow' layout="fill" />
    </span>
</li>

const Menu: React.FC<TMenu> = ({ planets, onClickItem }) => {
    const renderLinks = planets?.map(({ name, theme = "#FFFFFF" }, index) => (
        <MenuItem key={`${name}-${index}`} name={name} theme={theme} onClickItem={onClickItem} />
    ));


    return <ul className={styles.menu}>
        {
            renderLinks
        }
    </ul>
}

export default Menu;
