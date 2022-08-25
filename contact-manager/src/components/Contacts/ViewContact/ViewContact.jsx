import React from "react";
import {Link} from 'react-router-dom';
import KAYI from '../../../images/KAYI.png';

let ViewContact = () =>{
    return (
        <React.Fragment>
            <section className="View-Contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="display-6 fw-bold">
                                View Contact
                            </h3>
                            <p className="fst-italic">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Excepturi sequi magni incidunt sit ut consequuntur! Magni, 
                                eos voluptates! Illum deserunt quos ipsam eveniet eligendi 
                                facere asperiores odio voluptates et quia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={KAYI} className="contact-image"/>
                        </div>

                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Full Name: <span className="fw-bold">Rajan</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile: <span className="fw-bold">9001000090</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email: <span className="fw-bold">Rajan@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Company: <span className="fw-bold">Ajacio</span>                               
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Division: <span className="fw-bold">Division 1</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Position: <span className="fw-bold">Attaque</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col">
                                <Link to ={'/contacts/list'} className="btn btn-dark">
                                    Back
                                </Link>
                            </div>
                    </div>
                    
                </div>
            </section>
        </React.Fragment>
    )
};
export default ViewContact;