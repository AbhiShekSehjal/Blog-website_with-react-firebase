import React from 'react'
import "../assets/globle.css"

function Navbar() {
    return (
        <nav className="navbar p-3" id="navbar">
            <div className="logo">Histomind</div>

            <div className="otherLinks ms-auto">
                <ul className="gap-3 listOfOtherLinks mb-0">
                    <a href="ourStory.html"><li>Our&nbsp;story</li></a>
                    <li><a href="blog.html" id="CreateBlogLink">Create blog</a></li>

                    <li><a href="showBlogs.html">All blogs</a></li>

                    <li><a href="signup.html" className="btn btn-primary btn-sm" id="signUpLink">signUp</a></li>

                    <li><a href="login.html" className="btn btn-primary btn-sm" id="loginLink">login</a></li>

                    <li className="btn btn-danger btn-sm" id="logoutLink" >Logout</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
