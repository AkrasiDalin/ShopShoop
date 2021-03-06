import styled from "styled-components";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const NavBar = () => {

    return (
        <div className=" w-100">
            <NavBarCSS className="justify-content-center">
            <div className="back"></div>
            <form  className="p-2 col-4 d-block">
                <div className="p-2 bg-light rounded rounded-pill">
                    <div className="input-group">
                        <input type="search" placeholder="What are you looking for?" className="form-control border-0 bg-light"/>
                        <button type="submit" className="btn btn-link text-primary"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </form>
            </NavBarCSS>
        </div>

    )

}

const NavBarCSS = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    .back {
        position: absolute;
        width:100%;
        height: 50px;
        background-color: rgba(0, 0, 0, .2);
        z-index: 0;
    }

    form {
        z-index: 100;

        input:focus {
            outline: none;
            border: none;
        }
    }
`;

export default NavBar;