import React from 'react';
import Backdrop from "../Backdrop/Backdrop";

interface Props {
    show: boolean;
}
const Modal:React.FC<Props> = ({show}) => {
    return (
        <>
            <Backdrop show={show}/>
            <div className="modal show" style={{display: show ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Modal title</h1>
                            <button type='button' className='cross'></button>
                        </div>
                        <p>
                            Modal Content
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;