import React from 'react';
import { Outlet } from "react-router-dom";
import { Element } from "react-scroll";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Myprojects from "./pages/Myprojects";
import MyBackground from "./pages/MyBackground";
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
                <Element name="MyBackground">
                    <MyBackground />
                </Element>

                <Element name="myprojects">
                    <Myprojects />
                </Element>
                {/* <Element name="contact">
                    <ContactPage />
                </Element> */}
            </div>

        </>
    )
}
export default App;