import React from "react";
import {Link} from 'react-router-dom';
import KAYI from "../../../images/KAYI.png";

let EditContact = () =>{
    return (
    <React.Fragment>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="display-6 fw-bold">
                            Edit Contact
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eaque, quaerat praesentium nesciunt obcaecati expedita maxime 
                            neque recusandae dolores inventore beatae omnis quis reprehenderit 
                            necessitatibus, ut modi, vel possimus hic ipsa?
                        </p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form action="">                                    
                            <div className="mb-2">
                                <input type="text" className="form-control form-control-lg" placeholder="Full Name"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control form-control-lg" placeholder="Photo URL"/>
                            </div>
                            <div className="mb-2">
                                <input type="tel" className="form-control form-control-lg" placeholder="Mobile"/>
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control form-control-lg" placeholder="Company"/>
                            </div>
                            <div className="mb-2">
                                <select name="" id="" className="form-control">
                                    <option value="">Select a division</option>
                                    <option value="">Selection nationale</option>
                                    <option value="">Division 4</option>
                                    <option value="">Division 1</option>
                                    <option value="">Division 2</option>
                                    <option value="">Division 3</option>
                                    <option value="">Division 4</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" className="form-control form-control-lg" placeholder="Position"/>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success my-3" value="Save"/>
                                <Link to ={'/contacts/list'} className="btn btn-dark ms-2">
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                            < img src={KAYI} alt="kayi" className="contact-image"/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};
export default EditContact;