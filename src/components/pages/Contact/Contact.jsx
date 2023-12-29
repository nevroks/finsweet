import React from 'react';
import './contact.css'
import MyButton from "../../UI/Button/MyButton";
import Fb_ico from '../../../sourses/pages/ContactPage/icons/Facebook.svg'
import Twit_ico from '../../../sourses/pages/ContactPage/icons/Twitter.svg'
import LI_ico from '../../../sourses/pages/ContactPage/icons/LinkedIn.svg'
const Contact = () => {
    return (
        <div className={'Contact'}>
            <div className={'Contact_header'}>
                <p className={'Label02'}>Contact</p>
                <h2>Get in touch with our CHURCH</h2>
            </div>
            <div className={'Contact_content'}>
                <form className={'Contact_content_form'} action="">
                    <h5>Contact form:</h5>
                    <input type="text" placeholder={'Your full Name'}/>
                    <input type="email" placeholder={'Your Email'}/>
                    <input type="text" placeholder={'Query Related'}/>
                    <input style={{minHeight:120}} type="text" placeholder={'Message'}/>
                    <MyButton width={624} height={64}>Send message</MyButton>
                </form>
                <div className={'Contact_content_info'}>
                    <div className={'Contact_content_infoAddress'}>
                        <p className={'Label03'}>Address</p>
                        <h5>NH 234   Public Square San Francisco  65368</h5>
                    </div>
                    <div className={'Contact_content_infoDetails'}>
                        <p className={'Label03'}>Address</p>
                        <h5>(480) 555-0103 <br/> finsweet@example.com</h5>
                    </div>
                    <div>
                        <p>Find us here</p>
                        <div className={'Contact_content_infoSocmedias'}>
                            <a href="."><img src={Fb_ico} alt=""/></a>
                            <a href="."><img src={Twit_ico} alt=""/></a>
                            <a href="."><img src={LI_ico} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;