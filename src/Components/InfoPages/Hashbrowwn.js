import React from 'react';
import './info.css';

// import new image here
import balloon from '../../images/balloon.jpg';
import balloon2 from '../../images/balloon2.jpg';
import balloon3 from '../../images/balloon3.jpg';

function Hashbrowwn() {
    return (
        <div className="Hashbrowwn project">
            <p className={'orange-header-project'}> HASHBROWWN Balloon</p>

            <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                {/*replace image here*/}
                <img className="rounded image col-lg-5 col-10" id={'image-project-header'} src={balloon} alt="Hashbrowwn balloon"/>

                <div className={'col-6 d-none d-lg-block d-xl-block'}>

                    <div className="card card-desktop border-dark bg-transparent">
                        <div className="card-body card-body-desktop d-flex align-items-center">
                            <div>
                                {/*Replace Name here*/}
                                <p className="card-text description">
                                    This project spanned two summers and included every part of the design process,
                                    from materials testing and selection to fabrication and field testing. The materials
                                    we used to build the balloon included 6um mylar, 12um aluminized mylar, 1mm black polyester
                                    felt, 0.5 mil polyethylene, VHB adhesive transfer, Kapton tape, and 850 tape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="mx-auto card border-dark card-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                <div className="card-body card-body-mobile d-flex align-items-center">
                    <div>
                        {/*Replace Name here*/}
                        <p className="card-text card-text-mobile description">
                            This project spanned two summers and included every part of the design process,
                            from materials testing and selection to fabrication and field testing. The materials
                            we used to build the balloon included 6um mylar, 12um aluminized mylar, 1mm black polyester
                            felt, 0.5 mil polyethylene, VHB adhesive transfer, Kapton tape, and 850 tape.
                        </p>
                    </div>
                </div>
            </div>


            <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                {/*replace image here*/}
                <div className={'col-4 d-none d-lg-block d-xl-block'}>

                    <div className="card card-left card-desktop border-dark bg-transparent">
                        <div className="card-body card-body-desktop card-body-left d-flex align-items-center">
                            <div>
                                {/*Replace Name here*/}
                                <p className="card-text description">
                                    The balloons structure consisted of one large carbon fiber ring around the lower
                                    circumference of the cylindrical mylar envelope.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <img className="rounded image col-lg-5 col-10" id={'image-project-header'} src={balloon2} alt="Hashbrowwn balloon"/>
            </div>

            <div
                className="mx-auto card border-dark card-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                <div className="card-body card-body-mobile d-flex align-items-center">
                    <div>
                        {/*Replace Name here*/}
                        <p className="card-text card-text-mobile description">
                            The balloons structure consisted of one large carbon fiber ring around the lower
                            circumference of the cylindrical mylar envelope.
                        </p>
                    </div>
                </div>


            </div>


            <div className={'row mx-auto mt-5 d-flex align-items-center justify-content-center main-project'}>
                {/*replace image here*/}
                <img className="rounded image col-lg-3 col-10 balloon3" id={'image-project-header'} src={balloon3} alt="Hashbrowwn balloon"/>

                <div className={'col-6 d-none d-lg-block d-xl-block'}>

                    <div className="card card-desktop border-dark bg-transparent">
                        <div className="card-body card-body-desktop d-flex align-items-center">
                            <div>
                                {/*Replace Name here*/}
                                <p className="card-text description">
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
            </div>

            <div
                className="mx-auto card border-dark card-mobile d-block d-lg-none d-xl-none bg-transparent col-11">
                <div className="card-body card-body-mobile d-flex align-items-center">
                    <div>
                        {/*Replace Name here*/}
                        <p className="card-text card-text-mobile description">
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
