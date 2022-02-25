/**
 * Dependencies
 */
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useAppContext } from '../../contexts/appContext';
import Menu from './Components/Menu';

/**
 * Styles
 */
import styles from './index.module.scss';

/**
 * Component 
 */
const Header: React.FC = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const [asideStyles, setAsideStyles] = useState({});
    const { openMenu, toggleMenu, changePlanet, planets } = useAppContext();
    const [width, setWidth] = useState(0);

    const mapMapItems = useMemo(() => planets.map(({ name, theme }) => ({ name, theme })), [planets]);

    const menuTriggerClassNames = classNames(styles.menu_trigger, { [styles.menu_trigger_open]: openMenu });
    const asideClassNames = classNames(styles.menu_aside, { [styles.menu_aside_open]: openMenu });

    const onChangePlanet = (name: string) => {
        changePlanet(name);
        toggleMenu(false);
    }

    useEffect(() => {
        window.addEventListener('resize', () => { 
            //Tablet
            if(window.innerWidth > 769){
                toggleMenu(false);
            }
            setWidth(window.innerWidth) 
        });
        return () => {
            window.removeEventListener('resize', () => undefined);
        }
    }, [toggleMenu]);

    useEffect(() => {
        const elHeight = headerRef?.current?.offsetHeight ?? 0;
        setAsideStyles({
            top: elHeight,
            height: `${window.screen.height - elHeight}px`
        });
    }, [width, headerRef])

    return <>
        <header id="header" className={styles.header} ref={headerRef}>
            <p className={styles.header__logo}>THE PLANETS</p>
            <Menu planets={mapMapItems} onClickItem={onChangePlanet} />
            <span className={menuTriggerClassNames} onClick={() => toggleMenu(!openMenu)} role="button">
                <Image src="/assets/icon-hamburger.svg" alt='Menu button' layout="fill" />
            </span>
        </header>
        <aside className={asideClassNames} style={asideStyles}>
            <Menu planets={mapMapItems} onClickItem={onChangePlanet} />
        </aside>
    </>
}

export default Header;