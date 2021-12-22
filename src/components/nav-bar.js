import styled from "styled-components";

const NavBar = () => {
    
    return (
        <NavBarCSS>
            <nav className="">
                NavBar
            </nav>
        
        </NavBarCSS>
    )
        
}

const NavBarCSS = styled.div`
    background-color: red;
    width: 100%;
    height: 50px;
`;

export default NavBar;