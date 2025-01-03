import React from "react";

const Contador = ({segundos}) => {

    return (

        <div className="container-fluid bg-success">

            <div className="row container p-5 mx-auto fs-2">

                <div className="col card text-center bg-dark text-white border border-white me-2">

                <i className="position-absolute top-50 start-50 translate-middle fa-regular fa-clock"></i>   

                </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 100000) % 10}

                </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 10000) % 10} 

                    </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 1000) % 10}

                </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 100) % 10}

                </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 10) % 10}

                </div>

                <div className="col card text-center bg-dark text-white border border-white me-2">

                    {Math.floor(segundos / 1) % 10}

                </div>

            </div>

        </div>
        
    )
}
export default Contador;