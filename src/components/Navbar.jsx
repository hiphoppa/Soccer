import React from 'react';
import { NavLink } from "react-router-dom";


const Navs = () => {
    return (
        <div className='mx-auto mt-2 mb-4'>
            <nav class="navbar nav-pills navbar-expand-sm justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item mr-3">
                        <NavLink className='py-2 px-4 rounded-pill' activeStyle={{color: 'white', backgroundColor: 'red'}} to='/Selected'>منتخب</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className='py-2 px-4 rounded-pill' activeStyle={{color: 'white', backgroundColor: 'red'}} exact to='/'>صفحه اصلی</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navs;