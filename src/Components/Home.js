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
        </div>
    );
}

export default Home;
