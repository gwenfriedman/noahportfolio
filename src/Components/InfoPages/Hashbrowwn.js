import React from 'react';
import './info.css';

// import new image here
import balloon from '../../images/balloon.jpg';
import balloon2 from '../../images/balloon2.jpg';
import balloon3 from '../../images/balloon3.jpg';

function Hashbrowwn() {
    return (
        <div className="Hashbrowwn">
            <p className={'orange-header-project'}> HASHBROWWN Balloon</p>

            <div className={'row mt-5 justify-content-center'}>
                {/*replace image here*/}
                <img className={'rounded my-auto image col-4'} src={balloon} alt="Hashbrowwn balloon"/>
                <div className={'rect rounded col-7'}>
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
                <img className={'rounded my-auto'} src={balloon2} alt="Hashbrowwn balloon"/>
            </div>


            <div className={'row mt-5 justify-content-center'}>
                {/*replace image here*/}
                <img className={'rounded my-auto balloon3'} src={balloon3} alt="Hashbrowwn balloon"/>
                <div className={'rect rounded balloon-3'}>
                    <div className={'text-field'}>
                        {/*Replace Description here*/}
                        <p className={'description'}>
                            The 5kg payload suspended beneath the balloon from the bottom ring included custom circuit
                            boards capable of remotely controlling the balloon, communicating with our ground station,
                            mapping the balloons position, and recording video. It was also necessary that our payload
                            had an emergency release mechanism. We tested our balloons small-scale and large-scale,
                            both in arenas and on test fields. By doing this, we could see how the prototypes scaled
                            based on our materials and methods. The largest balloon we built had an 8 meter diameter
                            with a height of 12 meters.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hashbrowwn;
