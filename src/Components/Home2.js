import React from 'react';
import './Home.css';

// import new image here
import balloon from '../images/balloon.jpg';
import emissions from '../images/emissions.png';
import ballista from '../images/ballista.jpg';

import {Link} from "react-router-dom";

export class Home2 extends React.Component {
    render() {
        return (
            <div className="Home">

                {/*Most Recent Project*/}
                <Link to={`/hashbrowwn`} style={{textDecoration: 'none'}}>
                    <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                        {/*replace image here*/}
                        <img className="rounded image col-lg-5 col-10" src={balloon} alt="Hashbrowwn balloon"/>

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
                <p className={'text-center mt-5'}><i className="down"></i></p>


                {/*PROJECTS SECTION*/}

                {/*MECHANICAL*/}
                <section id={'mechanical'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5 col-10'} height="2" width="1440">
                            <line x1="0" y1="0" x2="1440" y2="2"/>
                        </svg>
                    </div>

                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Mechanical Projects </p>


                    {/*copy and paste this to add a new section, update image, text, and link*/}
                    <div className={'row mt-5 justify-content-center col-12'}>
                        <img className={'rounded my-auto project-pic col-4'} height={'280px'} src={emissions}
                             alt="Emissions simulation"/>
                        <div className={'project-rect rounded col-8'}>
                            <div className={'project-text-field'}>
                                {/*Replace Name here*/}
                                <h3 className={'orange-project-header'}>Emissions Simulation</h3>

                                {/*Replace Description here*/}
                                <p className={'project-description'}>
                                    A simulation that takes physical input of users driving toy cars
                                    along a model roadway and changes the imagery displayed on the
                                    roadway’s backdrop in real time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={'row mt-5 justify-content-center col-12'}>
                        <img className={'rounded my-auto project-pic col-4'} height={'280px'} src={ballista}
                             alt="Ballista"/>
                        <div className={'project-rect rounded col-8'}>
                            <div className={'project-text-field'}>
                                {/*Replace Name here*/}
                                <h3 className={'orange-project-header'}>Ballista</h3>

                                {/*Replace Description here*/}
                                <p className={'project-description'}>
                                    A physics final project with the objective of transferring torsional
                                    energy into ballistic kinetic energy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/*ELECTRICAL*/}
                <section id={'electrical'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5'} height="2" width="1040">
                            <line x1="0" y1="0" x2="1040" y2="2"/>
                        </svg>
                    </div>
                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Electrical Projects </p>


                    {/*copy and paste this to add a new section, update image, text, and link*/}
                    <div className={'row mt-5 justify-content-center'}>
                        <img className={'rounded my-auto project-pic'} src={balloon} alt="Hashbrowwn balloon"/>
                        <div className={'project-rect rounded'}>
                            <div className={'project-text-field'}>
                                {/*Replace Name here*/}
                                <h3 className={'orange-project-header'}>HASHBROWWN BALLOON</h3>

                                {/*Replace Description here*/}
                                <p className={'project-description'}> High-Altitude Solar-Heated Balloon Research
                                    Observatory
                                    With Wind Navigation </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/*MATERIALS*/}
                <section id={'materials'}>
                    <div className={'text-center'}>
                        <svg className={'mt-5'} height="2" width="1040">
                            <line x1="0" y1="0" x2="1040" y2="2"/>
                        </svg>
                    </div>
                    {/*replace header name here*/}
                    <p className={'section-title mt-3'}> Materials Projects </p>


                    {/*copy and paste this to add a new section, update image, text, and link*/}
                    <div className={'row mt-5 justify-content-center'}>
                        <img className={'rounded my-auto project-pic'} src={balloon} alt="Hashbrowwn balloon"/>
                        <div className={'project-rect rounded'}>
                            <div className={'project-text-field'}>
                                {/*Replace Name here*/}
                                <h3 className={'orange-project-header'}>HASHBROWWN BALLOON</h3>

                                {/*Replace Description here*/}
                                <p className={'project-description'}> High-Altitude Solar-Heated Balloon Research
                                    Observatory
                                    With Wind Navigation </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Home2;