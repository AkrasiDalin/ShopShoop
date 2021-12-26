import styled from "styled-components";

const SideBar = () => {
    
    return (
            <nav className="collapse d-lg-block fixed-left sidebar bg-white col-2 bg bg-danger" style={{minWidth: '150px'}}>
            <div className="position-sticky">
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
            </div>
        </nav>
    )
}

const SideBarCSS = styled.div`

`;

export default SideBar;