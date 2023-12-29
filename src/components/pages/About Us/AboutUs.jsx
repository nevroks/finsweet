import React from 'react';
import './AboutUs.css'
import aBeardedMan from '../../../sourses/pages/AboutusPage/a-bearded-man-praying-5206040.svg'
import manWomanReadingBook from '../../../sourses/pages/AboutusPage/man-and-woman-reading-book-while-sitting-on-pews-8468470.svg'
import peopleSitting from '../../../sourses/pages/AboutusPage/people-sitting-on-brown-pews-8674151.svg'
import firstBenefit from '../../../sourses/pages/AboutusPage/1benefit.svg'
import secondBenefit from '../../../sourses/pages/AboutusPage/2benefit.svg'
import thirdBenefit from '../../../sourses/pages/AboutusPage/3benefit.svg'
import fourthBenefit from '../../../sourses/pages/AboutusPage/4benefit.svg'
import InfoCard from "./AboutUsUiComponents/InfoCard";
const AboutUs = () => {
    return (
        <div className={'aboutUs'}>
            <div className={'aboutUs_Heading'}>
                <div>
                    <p>About us</p>
                    <h2>Serving the world around us</h2>
                </div>
            </div>
            <div className={'WelcomeToOurChurch'}>
                <p className={'Label02'}>Welcome to our CHURCH</p>
                <h2>Love and compassion</h2>
                <p style={{margin:'32px 0px 48px',textAlign:"center"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/>
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
                <div className={'WelcomeToOurChurch_ImgContainer'}>
                    <img src={aBeardedMan} alt=""/>
                    <img src={manWomanReadingBook} alt=""/>
                    <img src={peopleSitting} alt=""/>
                </div>
                <div className={'ourMission'}>
                    <div>
                        <p className={'Label02'}>OUR MISSIOn & Vision</p>
                        <h4>STRIVING FOR A BETTER <br/> TOMORROW</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                            sed do eiusmod tempor incididunt ut labore et dolore <br/>
                            magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/>
                            consequat. Duis aute irure dolor in reprehenderit in <br/>
                            voluptate velit esse cillum.
                        </p>
                    </div>
                    <div>
                        <p className={'Label02'}>WHAT WE DO</p>
                        <h4>BRINgING PEACE AND JOY <br/> TO THE WORLD</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                            sed do eiusmod tempor incididunt ut labore et dolore <br/>
                            magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo <br/>
                            consequat. Duis aute irure dolor in reprehenderit in <br/>
                            voluptate velit esse cillum.
                        </p>
                    </div>
                </div>
            </div>
            <div className={'bennefits'}>
                <p>BENEFITS </p>
                <h2>THE benefits of <br/> joining our church</h2>
                <div className={'bennefits_contentSection'}>
                    <div>
                        <div style={{marginRight:28}}>
                            <h4>find fulfillment and joy</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        </div>
                        <img src={firstBenefit} alt=""/>
                    </div>
                    <div>
                        <img src={secondBenefit} alt=""/>
                        <div style={{marginLeft:48}}>
                            <h4>shared values</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        </div>

                    </div>
                    <div>
                        <div style={{marginRight:28}}>
                            <h4>charity events</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        </div>
                        <img src={thirdBenefit} alt=""/>
                    </div>
                    <div>
                        <img src={fourthBenefit} alt=""/>
                        <div style={{marginLeft:48}}>
                            <h4>All are welcome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'churchMembers'}>
                <p className={'Label02'}>church members</p>
                <h2>meet our Inspirational team</h2>
                <div className={'churchMembers_members'}>
                    <InfoCard person={'Kim Bowen'} job={'Pastor, Church'}/>
                    <InfoCard person={'Danielle Watkins'} job={'Pastor, Church'}/>
                    <InfoCard person={'Naomi Craig'} job={'Pastor, Church'}/>
                    <InfoCard person={'Santos Payne'} job={'Pastor, Church'}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;