import React, { Fragment } from 'react';
import Input from './components/Input';
import Players from './components/Players';
import { ToastContainer } from 'react-toastify'
import Selected from './components/Selected';
import { Route } from 'react-router'
import Navs from './components/Navbar';


const App = () => {
  return (
    <Fragment>
        <div className="container mt-5 rtl">
          <Navs />
          <ToastContainer />
          <div className="row">
            <Route path="/" exact component={Input} />
            <Route path="/" exact component={Players} />
            <Route path='/Selected' component={Selected} />
          </div>
        </div>
    </Fragment>
  );
}

export default App;