import React from 'react';
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Cards from "../components/Cards"
import Video from "../components/Video";
import Sounds from "../components/Sounds";

const Landing = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <article>
                    <Hero/>
                    <Introduction/>
                    <Cards/>
                    <Video/>
                    <Sounds/>
                </article>
            </main>
        </>

    );
};

export default Landing;