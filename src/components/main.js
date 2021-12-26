import styled from "styled-components";

const Main = () => {
    
    return (
        <section className="container col-7" >
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {[34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3,34,54,34,45,32,54,34,5,3,56,34,65,43,65,34,6,3].map((x,y) => (
                <div className="col mb-5" key={y}>
                    <div className="card h-100">
                        <img className="card-img-top" src="" alt="..." />
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h5 className="fw-bolder">Product Name</h5>
                                $price
                            </div>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}

const MainCSS = styled.div`
    background-color: violet;
    flex: 1 32%;
    max-width: 1000px;
    min-height: 700px;
`;

export default Main;