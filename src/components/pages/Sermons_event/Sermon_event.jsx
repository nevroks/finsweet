import React from 'react';
import './SermonEvent.css'
import img from '../../../sourses/pages/SermonEventPage/86QxYjwq8LU.png'
import placeIcon from '../../../sourses/imgs/place_con.svg'
import timeIcon from '../../../sourses/imgs/clock_icon.svg'
import MyButton from "../../UI/Button/MyButton";
import InfoCard from "../Sermons/sermonsUiComponents/InfoCard";

const SermonEvent = () => {
    return (
        <div className={'sermonEvent'}>
                <div className={'howToTrulyTrustSomeone'}>
                    <div className={'howToTrulyTrustSomeone_info'}>
                        <img src={img} alt=""/>
                        <p className={'Cap03'}>Upcoming Event</p>
                        <h2>HOW TO TRULY TRUST SOMEONE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
                        <div><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.
                        </p></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pharetra sit amet aliquam id diam maecenas ultricies.
                        </p>
                    </div>
                    <form className={'howToTrulyTrustSomeone_form'}>
                        <h4>rEGISTER nOW</h4>
                        <div className={'howToTrulyTrustSomeone_formInfo'}>
                            <div>
                                <img src={placeIcon} alt=""/>
                                <p >No 233 Main St. New York, United States</p>
                            </div>
                           <div>
                               <img src={timeIcon} alt=""/>
                               <p >13 May, 2018</p>
                           </div>
                        </div>
                        <div className={'howToTrulyTrustSomeone_form_input'}>
                            <p>
                                Full Name
                            </p>
                            <input placeholder={'Leonard John'} type="text"/>
                        </div>
                        <div className={'howToTrulyTrustSomeone_form_input'}>
                            <p>
                                Email
                            </p>
                            <input placeholder={'admin@abc.com'} type="email"/>
                        </div>
                        <MyButton width={227} height={64}>Register now</MyButton>
                    </form>
                </div>
                <div className={"UpcomingSermons"}>
                    <h2>Upcoming sermons</h2>
                    <div className={'UpcomingSermons_Content'}>
                        <InfoCard even={'100 random acts of kindness'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/>
                        <InfoCard even={'Faith is a process, not a destination'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/>
                        <InfoCard even={'there is nothing impossible'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/>
                        <InfoCard even={'WATCH AND LISTEN TO OUR SERMONS'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/>
                    </div>
                </div>
        </div>
    );
};

export default SermonEvent;