import React from 'react';
import classes from "./UpcomingSermons.module.css";
import time_ico from '../../../sourses/imgs/clock_icon.svg'
import place_ico from '../../../sourses/imgs/place_con.svg'
import MyButton from "../Button/MyButton";
const UpcomingSermons = () => {
    return (
        <div className={classes.UpcomingSermons}>
            <p style={{marginBottom:18}} className={'Label02'}>Upcoming SERMONS</p>
            <h2 style={{marginBottom:66,textAlign:'center'}}>join us and become part <br/> of something great</h2>
            <div className={classes.UpcomingSermons_Content}>
                <div className={classes.iwannacry}>
                    <div className={classes.UpcomingEvent_header}>
                        <p className={'Cap03'}>Upcoming Event</p>
                        <div style={{display:'flex',flexDirection:'column', alignItems:'flex-end'}}>
                            <h5>20</h5>
                            <p className={'Label02'}>JULY</p>
                        </div>
                    </div>
                    <div className={classes.UpcomingEvent_ContentSection}>
                        <h5>WATCH AND LISTEN <br/> TO OUR SERMONS</h5>
                        <p style={{marginBottom:32}}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor.</p>
                        <div style={{display:'flex'}}>
                            <img style={{margin:'0px 16px 25px 0px'}} src={time_ico} alt=""/>
                            <p>Friday 23:39 IST <br/> Saturday 11:20 ISD</p>
                        </div>
                        <div style={{margin:'16px 0px 32px',display:'flex'}}>
                            <img style={{margin:'0px 16px 25px 0px'}} src={place_ico} alt=""/>
                            <p>No 233 Main St. New York, <br/> United States</p>
                        </div>
                        <a href="/contact"><MyButton width={191} height={64}>Register</MyButton></a>
                    </div>
                </div>

            </div>
            <div className={classes.ViewAllSermons}>
                <a href="/sermons"><p className={'Label01'}>View all Sermons</p></a>
            </div>

        </div>
    );
};

export default UpcomingSermons;