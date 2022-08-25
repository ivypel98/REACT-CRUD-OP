import React, { useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import KAYI from "../../../images/KAYI.png";
import {ContactService} from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner.js";

let ContactList = () =>{

    let[state, setState] = useState({
        loading : false,
        contacts : [],
        errorMessage: ''
    });

    useEffect(() => {
        const gets = async () =>{
            try {
                let response = await ContactService.getAllContacts();
                console.log(response.data);
            }
        catch(error) {
            setState ({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
        }
        gets();
    },[]);

    let {loading , contacts}= state;

    return (
        <React.Fragment>
            <pre>{JSON.stringify(contacts)}</pre>
            {/* Debut section 1 */}
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">

                        {/* ligne 1  Add New player + texte descriptif */}
                        <div className="row">
                            <div className="col">
                                <h3 className="fw-bold"> Add <small className="text-muted">New player</small>
                                    <Link to ={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New
                                    </Link>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Voluptate vero deserunt eaque sint doloremque voluptatem, 
                                    quibusdam asperiores neque molestiae 
                                    ex veniam sapiente quasi iusto dignissimos hic laborum alias quaerat. Cum.
                                </p>
                            </div>
                        </div>
                        {/* fin ligne 1 */}

                        {/* ligne 2 : barre de recherche */}
                        <div className="row">
                            <div className="col-md-7">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            {/* <label for="exampleDataList" class="form-label"></label> */}
                                            <input type="text" className="form-control" placeholder="type to search"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type='submit'className='btn btn-outline-dark' value='Search'/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* fin ligne 2 */}
                    </div>                                                                                                                                                                             
                </div>
            </section>
            {/* fin section 1 */}

            {
                loading ? <Spinner/>:<React.Fragment>

            {/* Debut section 2 */}
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        
                        {
                            contacts.lenght > 0 &&
                            contacts.map(contact => {
                                return (
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                        <div className="col-md-4">
                                            <img src={KAYI} alt="kayi" className="contact-img"/>
                                        </div>

                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Full Name: <span className="fw-bold">Rajan</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile: <span className="fw-bold">9000000090</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email: <span className="fw-bold">Rajan@gmail.com</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to ={'/contacts/view/:contacId'} className="btn btn-warning my-1">
                                                <i className="fa-solid fa-eye"/>
                                            </Link>
                                            <Link to ={'/contacts/edit/:contacId'} className="btn btn-primary my-1">
                                                <i className="fa-solid fa-pen"/>
                                            </Link>
                                            <button className="btn btn-danger my-1">
                                                <i className="fa-solid fa-trash"/>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                        {/* Repeat a card */}
                        
                    </div>
                </div>
            </section>
            {/* Fin section 2 */}

            </React.Fragment>
            }
        </React.Fragment>
    )
};
export default ContactList;