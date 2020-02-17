import React from 'react';
import './Home.css';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <p className={'nav-header'}> Noah Taylor </p>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">
                            <p className={'link'}>Mechanical</p>
                        </a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">
                            <p className={'link'}>Electrical</p>
                            </a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#">
                            <p className={'link'}>Materials</p>
                        </a>
                    </li>
                    <svg className={'mr-3'} height="45" width="2">
                        <line x1="0" y1="0" x2="0" y2="45"/>
                    </svg>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">
                            <p className={'link'}>Hobbies</p>
                        </a>
                    </li>
                    <li className="nav-item mr-5">
                        <a className="nav-link" href="#">
                            <p className={'link'}>Me</p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
