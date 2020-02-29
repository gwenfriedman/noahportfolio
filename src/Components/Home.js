import React from 'react';
import './Home.css';

// import new image here
import balloon from '../images/balloon.jpg';
import emissions from '../images/emissions.png';
import ballista from '../images/ballista.jpg';

// import {Link} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import Nav from "react-bootstrap/Nav";


export class Home extends React.Component {
    render() {
        return (
            <div className="Home">

                {/*Most Recent Project*/}
                <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                    <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                        {/*replace image here*/}
                        <img className="rounded image col-lg-5 col-10" id={'image-project-header'} src={balloon} alt="Hashbrowwn balloon"/>

                        <div className={'col-6 d-none d-lg-block d-xl-block'}>

                            <div className="card card-desktop border-dark bg-transparent">
                                <div className="card-body card-body-desktop d-flex align-items-center">
                                    <div>
                                        <div className={'rect-orange rounded'}>
                                            <p className={'flag'}> Most Recent Project </p>
                                        </div>

                                        {/*Replace Name here*/}
                                        <h3 className="card-title orange-header">HASHBROWWN Balloon</h3>
                                        <p className="card-text description">High-Altitude Solar-Heated Balloon Research
                                            Observatory With Wind Navigation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mx-auto card border-dark card-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                        <div className="card-body card-body-mobile d-flex align-items-center">
                            <div>
                                <div className={'rect-orange-mobile rounded'}>
                                    <p className={'flag'}> Most Recent Project </p>
                                </div>

                                {/*Replace Name here*/}
                                <h3 className="card-title orange-header">HASHBROWWN Balloon</h3>
                                <p className="card-text description">High-Altitude Solar-Heated Balloon Research
                                    Observatory With Wind Navigation</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link smooth to="/#mechanical" activeClassName="selected">
                    <p className={'text-center mt-5'}><i className="down"></i></p>
                </Link>


                {/*PROJECTS SECTION*/}

                {/*MECHANICAL*/}
                <section id={'mechanical'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5 col-11'} height="2" width="1440">
                            <line x1="0" y1="0" x2="1440" y2="2"/>
                        </svg>
                    </div>

                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Mechanical Projects </p>


                    <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                        <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                            {/*replace image here*/}
                            <img className="rounded image col-lg-4 col-10" id={'image-project-header'} src={emissions} alt="Emissions Simulation"/>

                            <div className={'col-6 d-none d-lg-block d-xl-block'}>

                                <div className="card card-desktop-project-list border-dark bg-transparent">
                                    <div className="card-body card-body-desktop d-flex align-items-center">
                                        <div>
                                            {/*Replace Name here*/}
                                            <h3 className="card-title orange-header">Emissions Simulation</h3>
                                            <p className="card-text description">
                                                A simulation that takes physical input of users driving toy cars
                                                along a model roadway and changes the imagery displayed on the
                                                roadway’s backdrop in real time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mx-auto card border-dark card-project-list-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                            <div className="card-body card-body-mobile d-flex align-items-center">
                                <div>
                                    {/*Replace Name here*/}
                                    <h3 className="card-title card-title-mobile orange-header">Emissions Simulation</h3>
                                    <p className="card-text description">
                                        A simulation that takes physical input of users driving toy cars
                                        along a model roadway and changes the imagery displayed on the
                                        roadway’s backdrop in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                        <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                            {/*replace image here*/}
                            <img className="rounded image col-lg-4 col-10" id={'image-project-header'} src={ballista} alt="Ballista"/>

                            <div className={'col-6 d-none d-lg-block d-xl-block'}>

                                <div className="card card-desktop-project-list border-dark bg-transparent">
                                    <div className="card-body card-body-desktop d-flex align-items-center">
                                        <div>
                                            {/*Replace Name here*/}
                                            <h3 className="card-title orange-header">Ballista</h3>
                                            <p className="card-text description">
                                                A physics final project with the objective of transferring torsional
                                                energy into ballistic kinetic energy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mx-auto card border-dark card-project-list-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                            <div className="card-body card-body-mobile d-flex align-items-center">
                                <div>
                                    {/*Replace Name here*/}
                                    <h3 className="card-title card-title-mobile orange-header">Ballista</h3>
                                    <p className="card-text description">
                                        A physics final project with the objective of transferring torsional
                                        energy into ballistic kinetic energy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>


                {/*ELECTRICAL*/}
                <section id={'electrical'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5 col-11'} height="2" width="1440">
                            <line x1="0" y1="0" x2="1440" y2="2"/>
                        </svg>
                    </div>
                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Electrical Projects </p>


                    {/*copy and paste this to add a new section, update image, text, and link*/}
                    <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                        <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                            {/*replace image here*/}
                            <img className="rounded image col-lg-4 col-10" id={'image-project-header'} src={emissions} alt="Emissions Simulation"/>

                            <div className={'col-6 d-none d-lg-block d-xl-block'}>

                                <div className="card card-desktop-project-list border-dark bg-transparent">
                                    <div className="card-body card-body-desktop d-flex align-items-center">
                                        <div>
                                            {/*Replace Name here*/}
                                            <h3 className="card-title orange-header">Emissions Simulation</h3>
                                            <p className="card-text description">
                                                A simulation that takes physical input of users driving toy cars
                                                along a model roadway and changes the imagery displayed on the
                                                roadway’s backdrop in real time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mx-auto card border-dark card-project-list-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                            <div className="card-body card-body-mobile d-flex align-items-center">
                                <div>
                                    {/*Replace Name here*/}
                                    <h3 className="card-title card-title-mobile orange-header">Emissions Simulation</h3>
                                    <p className="card-text description">
                                        A simulation that takes physical input of users driving toy cars
                                        along a model roadway and changes the imagery displayed on the
                                        roadway’s backdrop in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>


                {/*MATERIALS*/}
                <section id={'materials'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5 col-11'} height="2" width="1040">
                            <line x1="0" y1="0" x2="1040" y2="2"/>
                        </svg>
                    </div>
                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Materials Projects </p>


                    {/*copy and paste this to add a new section, update image, text, and link*/}
                    <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                        <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                            {/*replace image here*/}
                            <img className="rounded image col-lg-4 col-10" id={'image-project-header'} src={emissions} alt="Emissions Simulation"/>

                            <div className={'col-6 d-none d-lg-block d-xl-block'}>

                                <div className="card card-desktop-project-list border-dark bg-transparent">
                                    <div className="card-body card-body-desktop d-flex align-items-center">
                                        <div>
                                            {/*Replace Name here*/}
                                            <h3 className="card-title orange-header">Emissions Simulation</h3>
                                            <p className="card-text description">
                                                A simulation that takes physical input of users driving toy cars
                                                along a model roadway and changes the imagery displayed on the
                                                roadway’s backdrop in real time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="mx-auto card border-dark card-project-list-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                            <div className="card-body card-body-mobile d-flex align-items-center">
                                <div>
                                    {/*Replace Name here*/}
                                    <h3 className="card-title card-title-mobile orange-header">Emissions Simulation</h3>
                                    <p className="card-text description">
                                        A simulation that takes physical input of users driving toy cars
                                        along a model roadway and changes the imagery displayed on the
                                        roadway’s backdrop in real time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            </div>

        );
    }
}

export default Home;