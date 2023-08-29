import React from 'react';
import { Outlet } from "react-router-dom";
import { Element } from "react-scroll";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Myprojects from "./pages/Myprojects";
import MyBackground from "./pages/MyBackground";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
// import ContactPage from "./pages/ContactPage";
function App() {
    return (
        <>
            <div>
                <Nav />
                <Outlet />
            </div>
            <div>
                <Element name="/">
                    <Home />
                </Element>
                <Element name="Resume">
                    <MyBackground />
                </Element>
                <Element name="Portfolios">
                    <Myprojects />
                </Element>
                <Element name="contact">
                    <Footer />
                </Element>
            </div>
        </>
    )
}
export default App;