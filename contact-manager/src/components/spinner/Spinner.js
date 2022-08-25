import React from 'react' ;
import SpinnerImg from '../../images/spinner.gif';

let Spinner = () => {
    return (
        <React.Fragment>
            <div className='spin'>
                <img src={SpinnerImg} alt ="" className="d-block m-auto" style={{width:'65px'}}/>
            </div>
        </React.Fragment>
    )
};

export default Spinner;