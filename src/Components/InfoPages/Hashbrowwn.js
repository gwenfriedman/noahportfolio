import React from 'react';
import './info.css';

// import new image here
import balloon from '../../images/balloon.png';

function Home() {
    return (
        <div className="Hashbrowwn">
            <p className={'orange-header-project'}> HASHBROWWN Balloon</p>

            {/*Most Recent Project*/}
            <div className={'row mt-5 justify-content-center'}>
                {/*replace image here*/}
                <img className={'rounded my-auto'} src={balloon} alt="Hashbrowwn balloon"/>
                <div className={'rect rounded col-6'}>
                    <div className={'text-field'}>
                        {/*Replace Description here*/}
                        <p className={'description'}>
                            This project spanned two summers and included every part of the design process,
                            from materials testing and selection to fabrication and field testing. The materials
                            we used to build the balloon included 6um mylar, 12um aluminized mylar, 1mm black polyester
                            felt, 0.5 mil polyethylene, VHB adhesive transfer, Kapton tape, and 850 tape.
                        </p>
                    </div>
                </div>
            </div>


            <div className={'row mt-5 justify-content-center'}>
                <div className={'rect-right rounded col-6'}>
                    <div className={'text-field-left'}>
                        {/*Replace Description here*/}
                        <p className={'description'}>
                            The balloons structure consisted of one large carbon fiber ring around the lower
                            circumference of the cylindrical mylar envelope.
                        </p>
                    </div>
                </div>
                <img className={'rounded my-auto'} src={balloon} alt="Hashbrowwn balloon"/>
            </div>
        </div>
    );
}

export default Home;
