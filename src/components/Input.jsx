import React, { createRef, Fragment, useContext, useEffect } from 'react';
import MyContext from '../context/TotalContext';

const Input = () => {
    const context = useContext(MyContext)
    const TextInput = createRef();

    useEffect(() => {
        TextInput.current.focus();
    })
    return (
        <Fragment>
            <div className="col-8 rounded mx-auto mb-5">
                <form className="custom-border rounded custom-bg p-5" onSubmit={context.submitted}>
                    <div className="input-group mb-3 px-3 my-auto mx-auto none-padding">
                        <div className="input-group-append">
                            <button className="btn input-group-text rounded" type="submit">
                                <i className="fa fa-arrow-left"></i>
                            </button>
                        </div>
                        <input
                            type="text"
                            value={context.name}
                            className="form-control dir-rtl"
                            placeholder="بازیکن مورد علاقه من"
                            onChange={context.handleInputChange}
                            ref={TextInput} />
                    </div>
                </form>
                <div className="text-center mt-3">
                    {context.isClicked ? (
                        <button
                            className={`btn btn-danger px-4 py-2 rounded`}
                            >
                            حذف
                        </button>
                    ) : ""}
                    <button
                        className={`btn ${context.isClicked ? "btn-warning" : "btn-primary"} mx-3 px-4 py-2 rounded`}
                        onClick={context.handleClick}>
                        {context.isClicked ? 'لغو' : 'انتخاب'}
                    </button>


                </div>
            </div>
        </Fragment>
    );
}

export default Input;