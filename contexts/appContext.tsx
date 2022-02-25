import { createContext, useContext, useState } from 'react';
import { TPlanet } from '../types/global';

type TAppContext = {
    currentPlanet: string,
    openMenu: boolean,
    changePlanet: (name: string) => void,
    toggleMenu: (isOpen: boolean) => void;
    planets: TPlanet[];
}

const AppContext = createContext<TAppContext>({
    currentPlanet: 'earth',
    openMenu: false,
    changePlanet: () => undefined,
    toggleMenu: () => undefined,
    planets: []
});

export const useAppContext = () => useContext(AppContext);

type TAppContextParams = {
    planets: TPlanet[];
}

export const AppProvider: React.FC<TAppContextParams> = ({ children, planets }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [currentPlanet, setCurrentPlanet] = useState('earth');

    const changePlanet = (name: string) => {
        setCurrentPlanet(name);
    }

    const toggleMenu = (isOpen = false) => {
        setOpenMenu(isOpen)
    }

    return <AppContext.Provider value={{
        openMenu,
        currentPlanet,
        changePlanet,
        toggleMenu,
        planets
    }}>
        {children}
    </AppContext.Provider>
}