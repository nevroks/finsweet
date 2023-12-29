import React from 'react';
import classes from "./MyFooter.module.css";
import MyButton from "../Button/MyButton";
import logo from '../../../sourses/logos/Logo_orange.svg'
import Facebooklogo from '../../../sourses/logos/FBLogo.svg'
import TwitterLogo from '../../../sourses/logos/TwitLogo.svg'
import LinkedInLogo from '../../../sourses/logos/LILogo.svg'
const MyFooter = () => {
    return (
        <footer className={classes.footNav}>
            <div className={classes.info}>
                <img src={logo} alt=""/>
                <p style={{marginBottom:32}}>© Copyright Finsweet 2022</p>
                <p>(480) 555-0103</p>
                <p>4517 Washington Ave. </p>
                <p style={{marginBottom:0}}>finsweet@example.com</p>
            </div>
            <div className={classes.navCol}>
                <p>Quicklinks</p>
                <ul>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/sermons">Sermons</a> </li>
                    <li><a href=".">Events</a></li>
                    <li style={{marginBottom:0}}><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div className={classes.socMedia}>
                <p>Connect</p>
                <a href="."><img src={Facebooklogo} alt=""/></a>
                <a href="."><img src={TwitterLogo} alt=""/></a>
                <a href="."><img style={{marginLeft:0}} src={LinkedInLogo} alt=""/></a>
            </div>
            <div className={classes.footForm}>
                <h4>Subscribe to get Latest Updates and News</h4>
                <form action="">
                    <input placeholder={'Yourmail@gmail.com'} type="email"/>
                    <MyButton width={'201px'} height={64}>Subscribe</MyButton>
                </form>
            </div>
        </footer>
    );
};

export default MyFooter;