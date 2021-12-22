import styled from "styled-components";

const SideBar = () => {
    
    return (
        <SideBarCSS>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
                <li>Option 5</li>
            </ul>
        </SideBarCSS>
    )
}

const SideBarCSS = styled.div`
    background-color: blue;
    flex: 0 200px;
`;

export default SideBar;