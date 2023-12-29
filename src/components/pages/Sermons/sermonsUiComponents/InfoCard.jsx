import React from 'react';
import classes from './InfoCard.module.css'
import time_ico from '../../../../sourses/imgs/clock_icon.svg'
import place_ico from '../../../../sourses/imgs/place_con.svg'
const InfoCard = (props) => {
    return (
        <div className={classes.infoCard}>
            <div className={classes.infoCard_header}>
                <h5>20</h5>
                <p className={'Label02'}>JULY</p>
            </div>
            <div className={classes.infoCard_content}>
                <p className={'Cap03'}>Upcoming Event</p>
                <h5>{props.even}</h5>
                <p style={{marginBottom:32}}>{props.tex}</p>
                <div className={classes.event_time}>
                    <img src={time_ico} alt=""/>
                    <p>{props.tim}</p>
                </div>
                <div className={classes.event_place}>
                    <img src={place_ico} alt=""/>
                    <p>{props.place}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;