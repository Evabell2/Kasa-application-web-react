import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Apropos from "./pages/Apropos"
import Header from "./Components/Header"
import Error from "./Components/Error"
import Footer from "./Components/Footer"
import Lodging from "./Components/Lodging";

 
ReactDOM.render(
    <BrowserRouter>

        <Header />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element={<Apropos />} />
            <Route path="*" element={<Error />} />
            <Route path="/logement/:id" element={<Lodging />} />
        </Routes>

        <Footer />

    </BrowserRouter>,
    document.getElementById("root")
)