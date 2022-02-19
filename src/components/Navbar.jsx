import React from 'react'

import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-primary">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Skillhub Todo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID"
                            >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">
                                <Link className="nav-link " aria-current="page" to="/add-todo">Add Todo</Link>
                                <Link className="nav-link " aria-current="page" to="/edit-todo">Edit Todo</Link>
                                
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}
