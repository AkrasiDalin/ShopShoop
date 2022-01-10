import styled from "styled-components";
import NavBar from "./nav-bar";

const Header = () => {
    
    return (
        <NavBarCSS className="fix-top  row row-col-8 justify-content-center">
            <NavBar />
        </NavBarCSS>
    )
}

const NavBarCSS = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100px;
`;

export default Header;