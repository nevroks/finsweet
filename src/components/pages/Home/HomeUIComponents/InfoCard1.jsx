import React from 'react';
import classes from "./InfoCard1.module.css";
import logo1 from '../../../../sourses/pages/HomePage/icons/Icon1.svg'
import logo2 from '../../../../sourses/pages/HomePage/icons/Icon2.svg'
import logo3 from '../../../../sourses/pages/HomePage/icons/Icon3.svg'

const InfoCard1 = ({text,title,id}) => {
    function getNum(){
        if (id===1){
            return logo1
        }else if(id===2){
            return logo2
        }else{
            return logo3
        }

    }
    return (

        <div className={classes.infoCard}>
            <img src={getNum(id)} alt=""/>
            <h4>{title}</h4>
            <p style={{marginLeft:"80px"}}>{text}</p>
        </div>
    );
};

export default InfoCard1;