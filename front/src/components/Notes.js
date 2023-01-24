import React from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditNote from './notes/EditNote';
import Header from "./notes/Nav"
import CreateNote from './notes/CreateNote';
import Home from './notes/Home';

export default function Notes() {
  return (
    <Router>
        <div className='main'>
        <Header />
        <section>
            <Routes>
            <Route path='/' component={<Home />} exact />
            <Route path='/create' component={<CreateNote />} exact />
            <Route path='/edit/:id' component={<EditNote />} exact />
            </Routes>
        </section>
        </div>
    </Router>
  )
}
