import React from 'react';
import './Home.css';
import Nav from './Nav';
// import new image here
import balloon from '../images/balloon.png';

function Home() {
    return (
        <div className="Home">
            <Nav/>

            {/*Most Recent Project*/}
                <div className={'row mt-5 justify-content-center'}>
                    {/*replace image here*/}
                    <img className={'rounded my-auto'} src={balloon} alt="Hashbrowwn balloon"/>
                    <div className={'rect rounded col-6'}>
                        <div className={'text-field'}>
                            <div className={'rect-orange rounded mt-5'}>
                                <p className={'flag'}> Most Recent Project </p>
                            </div>

                            {/*Replace Name here*/}
                            <h3 className={'orange-header'}>HASHBROWWN BALLOON</h3>

                            {/*Replace Description here*/}
                            <p className={'description'}> High-Altitude Solar-Heated Balloon Research Observatory With Wind Navigation </p>
                        </div>
                    </div>
                </div>
            <p className={'text-center mt-5'}> <i className="down"></i></p>

            <div className={'text-center'}>
                <svg className={'mt-5'} height="2" width="1040">
                    <line x1="0" y1="0" x2="1040" y2="2"/>
                </svg>
            </div>

            {/*replace header name here*/}
            <p className={'section-title'}> Mechanical Projects </p>


            {/*copy and paste this to add a new section, update image, text, and link*/}
            <div className={'row mt-5 justify-content-center'}>
                <img className={'rounded my-auto project-pic'} src={balloon} alt="Hashbrowwn balloon"/>
                <div className={'project-rect rounded'}>
                    <div className={'project-text-field'}>
                        {/*Replace Name here*/}
                        <h3 className={'orange-project-header'}>HASHBROWWN BALLOON</h3>

                        {/*Replace Description here*/}
                        <p className={'project-description'}> High-Altitude Solar-Heated Balloon Research Observatory With Wind Navigation </p>
                    </div>
                </div>
            </div>



            <div className={'text-center'}>
                <svg className={'mt-5'} height="2" width="1040">
                    <line x1="0" y1="0" x2="1040" y2="2"/>
                </svg>
            </div>
            {/*replace header name here*/}
            <p className={'section-title'}> Electrical Projects </p>


            {/*copy and paste this to add a new section, update image, text, and link*/}
            <div className={'row mt-5 justify-content-center'}>
                <img className={'rounded my-auto project-pic'} src={balloon} alt="Hashbrowwn balloon"/>
                <div className={'project-rect rounded'}>
                    <div className={'project-text-field'}>
                        {/*Replace Name here*/}
                        <h3 className={'orange-project-header'}>HASHBROWWN BALLOON</h3>

                        {/*Replace Description here*/}
                        <p className={'project-description'}> High-Altitude Solar-Heated Balloon Research Observatory With Wind Navigation </p>
                    </div>
                </div>
            </div>


            <div className={'text-center'}>
                <svg className={'mt-5'} height="2" width="1040">
                    <line x1="0" y1="0" x2="1040" y2="2"/>
                </svg>
            </div>
            {/*replace header name here*/}
            <p className={'section-title'}> Materials Projects </p>


            {/*copy and paste this to add a new section, update image, text, and link*/}
            <div className={'row mt-5 justify-content-center'}>
                <img className={'rounded my-auto project-pic'} src={balloon} alt="Hashbrowwn balloon"/>
                <div className={'project-rect rounded'}>
                    <div className={'project-text-field'}>
                        {/*Replace Name here*/}
                        <h3 className={'orange-project-header'}>HASHBROWWN BALLOON</h3>

                        {/*Replace Description here*/}
                        <p className={'project-description'}> High-Altitude Solar-Heated Balloon Research Observatory With Wind Navigation </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
