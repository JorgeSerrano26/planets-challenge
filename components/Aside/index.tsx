import styled from 'styled-components';
import { dark_blue } from '../../../../styles/colors';
import AsideComponent from './Aside';


const Aside = styled(AsideComponent)`
    position: fixed;
    left: ${props => props.open ? "0" : "-100%"};
    width: 100%;
    padding: 20px 20px 0px 20px;
    transition: left 0.4s ease;
    height: ${props => props.height || 0}px;
    top: ${props => props.top || 0}px;
    background: ${dark_blue};
`;


export default Aside;