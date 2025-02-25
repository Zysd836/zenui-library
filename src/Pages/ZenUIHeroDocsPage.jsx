import React from 'react';

// components
import NewsBoard from "../Components/Home/NewsBoard.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import BecomeZenUIHero from "../Components/BecomeZenUIHero/Index.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const ZenUIHeroDocsPage = () => {
    return (
        <>
            <NewsBoard/>
            <Navbar/>
            <MobileNavbar/>
            <div className='overflow-x-hidden'>
                <BecomeZenUIHero/>
                <Footer/>
            </div>
        </>
    );
};

export default ZenUIHeroDocsPage;
