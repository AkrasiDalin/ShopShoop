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
    width: 100%;
    height: 80px;
    margin-bottom: 20px;
`;

export default Header;