import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../utils/style/index.module.css'
import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import FlatsSheets from '../../pages/FlatsSheets';
//import flatsList from '../../datas/flatsList.json';
import { FlatsListProvider } from '../../utils/context';

export default function MyRouter() {

    return (
        <Router>
            <FlatsListProvider>
                <Header />
                <Routes>
                    <Route exact path='/projet6-React-firebase' element={<Home />} />
                    <Route path='/projet6-React-firebase/about' element={<About />} />
                    <Route path='/projet6-React-firebase/flat/:id' element={<FlatsSheets />} errorElement={<Error />} />
                    <Route path='/*' element={<Error />} />
                </Routes>
                <Footer />
            </FlatsListProvider>
        </Router>
    )
}