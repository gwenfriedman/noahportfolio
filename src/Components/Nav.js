import React from 'react';
import './Nav.css';
import {HashLink as Link} from 'react-router-hash-link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Navigation() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="navbar container-fluid">
            <Navbar.Brand as={Link} className="navbar-brand" to="/">
                <p className={'nav-header'}> Noah Taylor </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className={'ml-4'}>
                <Nav className="mr-5">
                    <Link smooth to="/#mechanical"
                          activeClassName="selected" className="nav-link mr-4">
                        <p className={'link'}>Mechanical</p>
                    </Link>

                    <Link to="/#electrical"
                          activeClassName="selected" className="nav-link mr-4">
                        <p className={'link'}>Electrical</p>
                    </Link>
                    <Link to="/#materials"
                          activeClassName="selected" className="nav-link mr-4">
                        <p className={'link'}>Materials</p>
                    </Link>

                    <span className="d-none d-lg-block">
                        <svg className={'mr-3'} height="45" width="2">
                            <line className={'hidden-xs'} x1="0" y1="0" x2="0" y2="45"/>
                        </svg>
                    </span>

                    <a className="nav-link mr-4" href="/">
                        <p className={'link'}>Hobbies</p>
                    </a>
                    <a className="nav-link mr-4" href="/">
                        <p className={'link '}>Me</p>
                    </a>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
//         <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
//     <a href={"/"} className={"navbar-brand"}>
//         <p className={'nav-header'}> Noah Taylor </p>
//     </a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto mr-5">
//             <li className="nav-item mr-4">
//                 <Link smooth to="/#mechanical"
//                       activeClassName="selected" className="nav-link">
//                     <p className={'link'}>Mechanical</p>
//                 </Link>
//             </li>
//             <li className="nav-item mr-4">
//                 <Link to="/#electrical"
//                       activeClassName="selected" className="nav-link">
//                     <p className={'link'}>Electrical</p>
//                 </Link>
//             </li>
//             <li className="nav-item mr-3">
//                 <Link to="/#materials"
//                       activeClassName="selected" className="nav-link">
//                     <p className={'link'}>Materials</p>
//                 </Link>
//             </li>
//             <svg className={'mr-3'} height="45" width="2">
//                 <line x1="0" y1="0" x2="0" y2="45"/>
//             </svg>
//             <li className="nav-item mr-4">
//                 <a className="nav-link" href="/">
//                     <p className={'link'}>Hobbies</p>
//                 </a>
//             </li>
//             <li className="nav-item mr-5">
//                 <a className="nav-link" href="/">
//                     <p className={'link'}>Me</p>
//                 </a>
//             </li>
//         </ul>
//     </div>
// </nav>

    );
}

export default Navigation;

