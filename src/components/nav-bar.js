import styled from "styled-components";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const NavBar = () => {
    
    return (
        <div className=" w-100">
            <NavBarCSS className="justify-content-center">
                <form  className="p-2 col-4 d-block">
                    
                    <div className="input-group">
                        <input type="search" placeholder="What are you looking for?" className="form-control border-0 bg-light"/>
                        <button type="submit" className="btn btn-link text-primary"><i className="bi bi-search"></i></button>
                    </div>
                </form>
            </NavBarCSS>
        </div>
        
    )
        
}

const NavBarCSS = styled.div`
    background-color: red;
    width: 100%;
    height: 50px;
    display: flex;
`;

export default NavBar;