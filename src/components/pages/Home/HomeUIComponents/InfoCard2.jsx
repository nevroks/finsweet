import React from 'react';
import classes from "./InfoCard2.module.css";
const InfoCard2 = (props) => {
    return (
        <div className={classes.InfoCard2}>
            <p className={'Cap03'}>{props.name}</p>
            <h5>{props.title}</h5>
            <p style={{maxWidth:238}}>{props.text}</p>
            <p style={{margin:'48px 0px 6px 0px',maxWidth:150,fontWeight:500}} className={'Label03'}>{props.author}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default InfoCard2;