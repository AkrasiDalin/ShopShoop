import styled from "styled-components";

const Main = (props) => {
    return (
        <section className="container col-7" >
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {props.data.map((obj,y) => (
                <MainCSS className="col mb-5" key={obj.id}>
                    <div className="card h-100">
                        <img className="card-img-top" src={obj.image} alt={obj.title} />
                        <div className="card-body p-2">
                            <div className="text-center">
                                <h5 className="fw-bolder">{obj.title}</h5>
                                £{obj.price}
                            </div>
                            <div className="card-footer p-2 pt-2 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn mt-auto "  href="#">Add to cart</a></div>
                            </div>
                        </div>
                        
                    </div>
                </MainCSS>
            ))}
            </div>
        </section>
    )
}

const MainCSS = styled.div`
    img {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        padding: 10px;
    }

    h5 {
        // width: 180px;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }

    .card {
        border: 0;
        border-radius: 25px;
        
        .card-body {
            background-image: linear-gradient(to right, #2fcbc4, #3fa9a5);
            color: white;
        }
        .card-footer  {
            background-color: #f58d46;
            height: 50px;
        }
    
        .card-footer a {
            background-color:#edc522;
            
        }

        .card-footer a:hover {
            background-color: #ed9a22;
            color: white;
        }
        
    }
    
`;

export default Main;