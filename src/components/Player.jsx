import React, { Fragment, useContext, useState } from 'react';
import MyContext from '../context/TotalContext';
import { ToastContainer, toast } from 'react-toastify'

const Player = ({ deleted, fullname }) => {
    const context = useContext(MyContext)
    const [clicked, setclicked] = useState(true)
    const [Edit, setEdit] = useState(false)
    const [Edited, setEdited] = useState(fullname)
    const [FullName, setFullName] = useState('')

    const handleChangeEdit = e => {
        setFullName(e.target.value)
    }
    const handleEditPlayer = e => {
        e.preventDefault();
        setEdited(FullName);
        setEdit(!Edit)
        toast.info(`${FullName} با موفقیت اصلاح شد.`, {
            position: 'top-left',
            closeOnClick: true
        })
    }
    let content = null;
    content = (
        <div className="col-8 mx-auto custom-transparent p-3 rounded dir-rtl text-right d-flex justify-content-between mb-3">
            <div className="d-flex">
                {context.isClicked ? <input type="checkbox" className="d-flex my-auto ml-3" /> : ""}

                <div className={`${clicked ? "custom-border-right" : "custom-border-del"} custom-fsize pr-3 align-items-center d-flex`}>
                    {Edited}
                        &nbsp;&nbsp;
                        {Edit ? (
                        <form className='form-group d-flex pos-rel align-items-center rounded' onSubmit={handleEditPlayer}>
                            <div className="input-group mb-3 px-3 my-auto mx-auto none-padding rounded">
                                <input type='text' className='form-control d-flex rounded' placeholder={Edited} onChange={handleChangeEdit} />
                                <div className="input-group-append">
                                    <button className="btn btn-success input-group-text rounded" type="submit">
                                        <i className="fa fa-arrow-left"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : ''}
                </div>
            </div>
            <div className="">
                <button className="btn" onClick={() => setEdit(!Edit)}>
                    <i className="fa fa-edit text-info"></i>
                </button>
                    &nbsp;|&nbsp;
                    <button className="btn" onClick={() => setclicked(!clicked)}>
                    <i className="fa fa-check text-success"></i>
                </button>
                    &nbsp;|&nbsp;
                    <button className="btn" onClick={deleted}>
                    <i className="fa fa-trash text-danger"></i>
                </button>
            </div>
        </div>
    )
    return (
        <Fragment>

            <ToastContainer />
            {content}

        </Fragment>
    );
}

export default Player;