import React from "react";
import {Link} from "react-router-dom";

let NavBar = () =>{
    return (
        <React.Fragment>

    {/* Stylisation du NavBar */}
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <i className="fa-solid fa-house-user text-warning mx-2"/>
                    Contact <span className="text-warning">Manager</span>
                </Link>

            </div>
        </nav>  
    {/*Fin NavBar */}

        </React.Fragment>
    )
};
export default NavBar;