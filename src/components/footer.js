import styled from "styled-components";

const Footer = () => {
    
    return (
        <FooterCSS>
            <div>
                Shop Shoop
            </div>
        </FooterCSS>
    )
}

const FooterCSS = styled.div`
    background-color: rgba(0, 0, 0, .6);
    color: white;
    height: 50px;
    width: 100%;
`;

export default Footer;