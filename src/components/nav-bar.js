import styled from "styled-components";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const NavBar = () => {
    
    return (
            <div className="input-group">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
                <label className="form-label" htmlFor="form1">Search</label>
            </div>
            <button type="button" className="btn btn-primary">
            <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
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