import React from 'react';
import classes from "./InfoCard.module.css";
import facebook from '../../../../sourses/pages/AboutusPage/icons/facebook_ico.svg'
import twitter from '../../../../sourses/pages/AboutusPage/icons/twitter_ico.svg'
import linkedIn from '../../../../sourses/pages/AboutusPage/icons/linkedIn_ico.svg'
import KimBowen from '../../../../sourses/pages/AboutusPage/KimBowen.svg'
import DanielleWatkins from '../../../../sourses/pages/AboutusPage/DanielleWatkins.svg'
import NaomiCraig from '../../../../sourses/pages/AboutusPage/NaomiCraig.svg'
import SantosPayne from '../../../../sourses/pages/AboutusPage/SantosPayne.svg'
const InfoCard = ({person, job}) => {
    return (
        <div className={classes.infoCard}>
            {person==='Kim Bowen'? <img src={KimBowen} alt=""/> : person==='Danielle Watkins' ? <img src={DanielleWatkins} alt=""/> : person==='Naomi Craig' ?
                <img src={NaomiCraig} alt=""/> : person==='Santos Payne' ? <img src={SantosPayne} alt=""/> : 1}
            <h5>{person}</h5>
            <p>{job}</p>
            <div className={classes.social_medias}>
                <a href="./"><img src={facebook} alt=""/></a>
                <a href="./"><img src={twitter} alt=""/></a>
                <a href="./"><img src={linkedIn} alt=""/></a>
            </div>
        </div>
    );
};

export default InfoCard;