//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";
import Contador from "./component/ContarSegundos.jsx";

//render your react application
let contador1 = 0;

setInterval(() => {

    ReactDOM.createRoot(document.getElementById('app')).render(<Contador segundos={contador1} />)

    contador1++; 
    
}, 1000)