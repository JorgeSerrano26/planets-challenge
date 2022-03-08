/**
 * Dependencies
 */
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useAppContext } from '../../contexts/appContext';

/**
 * Styles
 */
import styles from './index.module.scss';

/**
 * Components
 */
import Aside from '../Aside';

/**
 * Component 
 */
const Header: React.FC = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const [asideStyles, setAsideStyles] = useState({ height: 0, top: 0 });
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
            if (window.innerWidth > 769) {
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
            height: window.screen.height - elHeight
        });
    }, [width, headerRef])

    return <>
        <header id="header" className={styles.header} ref={headerRef}>
            <p className={styles.header__logo}>THE PLANETS</p>
            {/* <Menu planets={mapMapItems} onClickItem={onChangePlanet} /> */}
            <span className={menuTriggerClassNames} onClick={() => toggleMenu(!openMenu)} role="button">
                <Image src="/assets/icon-hamburger.svg" alt='Menu button' layout="fill" />
            </span>
        </header>
        <Aside
            top={asideStyles.top}
            height={asideStyles.height}
            planets={mapMapItems}
            onClickItem={onChangePlanet}
            open={openMenu}
        />
    </>
}

export default Header;