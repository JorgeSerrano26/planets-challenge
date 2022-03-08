import MenuList from './Components/MenuList';
import MenuItemList from './Components/MenuItemList';

type TPlanetItem = {
    name: string;
    theme: string;
};

type TAside = {
    planets: TPlanetItem[];
    onClickItem: (name: string) => void;
    className?: string;
    open: boolean;
    top?: number;
    height?: number;
};


const Aside: React.FC<TAside> = ({ className, planets, onClickItem }) => {
    const planetsMapper = (planet: TPlanetItem, index: number) => <MenuItemList
        key={`aside-menu-item-${index}`}
        {...planet}
        onClickItem={onClickItem}
    />

    return <aside className={className}>
        <MenuList>
            { planets.map(planetsMapper) }
        </MenuList>
    </aside>
};

export default Aside;