import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg">
            <Link class="navbar-brand navd" to="/">GeekySynergy</Link>
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link" to="/">Signup</Link>
                <Link class="nav-item nav-link" to="/login">Login</Link>
                <Link class="nav-item nav-link" to="/company">Company</Link>
                </div>
            </div>
        </nav>

    )
}
