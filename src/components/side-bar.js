import styled from "styled-components";

const SideBar = () => {
    
    return (
        
            <nav className=" bg-white col-2 " style={{minWidth: '150px'}}>
            <SideBarCSS className="sticky-top">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <a
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple active">
                        <span>Clothes</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                        <span>Footwear</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2 ripple"
                    ><span>Accessories</span></a>
                </div>
            </SideBarCSS>
        </nav>
        
    )
}

const SideBarCSS = styled.div`
    height: 100px;

    a.active {
        background-image: linear-gradient(to right, #2fcbc4, #3fa9a5);
    }
    

`;

export default SideBar;