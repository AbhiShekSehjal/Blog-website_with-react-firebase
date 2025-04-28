import React from 'react'
import "../assets/globle.css"
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
    return (
        <>
            <Navbar />

            <header className="container header">
                <div className="leftSideBox">
                    <div className="headingLine">
                        Exploring the unseen stories of human minds and history.
                    </div>
                </div>
                <div className="rightSideBox">
                    <div className="bgImage"></div>
                </div>
            </header>

            <Footer />
        </>
    )
}

export default Home
