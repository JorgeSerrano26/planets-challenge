import Image from "next/image";
import styled from "styled-components";

interface IPlanetItem  {
  name: string;
  theme: string;
  onClickItem: (name: string) => void;
  className?: string;
};

const MenuItem: React.FC<IPlanetItem> = ({ name, onClickItem, theme, className }) => (
  <li className={className} onClick={() => onClickItem(name)}>
    <span className="dot" style={{ backgroundColor: theme }} />
    <p className="planet-name">{name}</p>
    <span className="chevron">
      <Image src="/assets/icon-chevron.svg" alt='Menu arrow' layout="fill" />
    </span>
  </li>
);

const MenuItemList = styled(MenuItem)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
    padding: 20px 0px;

    &:hover{
        cursor: pointer;
    }

    &:last-child {
      border-bottom: none;
    }

    .planet-name {
      margin: 0;
      font-size: 15px;
      flex: 1 0 auto;
      font-family: "Spartan", sans-serif;
      letter-spacing: 0.15em;
      font-weight: bold;
    }
    .dot {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .chevron {
      position: relative;
      display: block;
      width: 4px;
      height: 8px;
      opacity: 1;
      justify-self: end;
    }
`;


export default MenuItemList;