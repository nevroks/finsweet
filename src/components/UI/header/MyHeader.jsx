import React from 'react';
import classes from "./MyHeader.module.css";
import MyButton from "../Button/MyButton";
import logo from '../../../sourses/logos/Logo.svg'

const MyHeader = () => {
    return (
        <header>
            <nav className={classes.navigation}>
                <div className={classes.imgContainer}>
                    <a href="/home"><img src={logo} alt=""/></a>
                </div>
                <div className={classes.navigation_content}>
                    <ul className={classes.navList}>
                        <a href="/home"><li>HOME</li></a>
                        <a href="/about"><li>ABOUT US</li></a>
                        <a href="/sermons"><li>SERMON</li></a>
                        <a href="/blog"><li>BLOG</li></a>
                    </ul>
                    <a href="/contact"><MyButton style={{padding:'20px 48px'}} width={179} height={56}>Contact us</MyButton></a>
                </div>
            </nav>
        </header>
    );
};

export default MyHeader;