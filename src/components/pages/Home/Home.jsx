import React from 'react';
import './Home.css'
import MyButton from "../../UI/Button/MyButton";
import InfoCard1 from "./HomeUIComponents/InfoCard1";
import bearedmanpraying from'../../../sourses/pages/HomePage/a-bearded-man-praying-5206040.svg'
import manandwomansitting from '../../../sourses/pages/HomePage/man-and-woman-reading-book-while-sitting-on-pews-8468470.svg'
import peoplesittingonbrownpews from '../../../sourses/pages/HomePage/people-sitting-on-brown-pews-8674151.svg'
import UpcomingSermons from "../../UI/UpcomingSermonsSection/UpcomingSermons";
import quoteIco from '../../../sourses/pages/HomePage/Quote icon.svg'
import InfoCard2 from "./HomeUIComponents/InfoCard2";
const Home = () => {
    return (
        <div className={'home'}>
            <div className={"welcome"}>
                <p id={'p1'}>Welcome to our CHURCH</p>
                <h1>Become a part of <br/> our community</h1>
                <a href="/sermons"><MyButton width={214} height={64}>Learn more</MyButton></a>
                <p id={'p2'}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do.</p>
            </div>
            <div className={'sub-headline1'}>
                <p>sub-headline</p>
                <h2>a church that's relevant</h2>
                <div className={'sub-headline1_InfoCards'}>
                    <InfoCard1 title={'About us'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} id={1}/>
                    <InfoCard1 title={'Get involved'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} id={2}/>
                    <InfoCard1 title={'Giving back'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} id={3}/>
                </div>
            </div>
            <div className={'sub-headline2'}>
                <p style={{marginBottom:24}} className={'Label02'}>SUB-HEADLINE</p>
                <h2>love and compassion</h2>
                <p className={'sub-headline2_Text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <a href="/blog"><MyButton width={205} height={64}>Read more</MyButton></a>
                <div className={'sub-headline2_imgSection'}>
                    <img src={bearedmanpraying} alt=""/>
                    <img style={{margin:'65px 24px 0px 24px'}} src={manandwomansitting} alt=""/>
                    <img src={peoplesittingonbrownpews} alt=""/>
                </div>
            </div>
            <div className={'ourmissionvision'}>
                <p className={'Label02'}>our mission & vision</p>
                <h4>celebrate WITH US</h4>
                <p className={'ourmissionvision_Text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/about">Read More</a>
            </div>
            <div className={'WatchAndlisten'}>
                <p style={{margin:'128px 0px 68px'}} className={'Label02'}>Watch and listen</p>
                <h2>THE benefits of <br/> joining our church</h2>
                <div className={'TheBenefitsOfJoining'}>
                    <a href="/sermons"><div className={'TheBenefitsOfJoining_1'}><h5>WATCH AND LISTEN TO OUR SERMONS</h5></div></a>
                    <a href="/sermons"><div className={'TheBenefitsOfJoining_2'}><h5>WATCH AND LISTEN TO OUR SERMONS</h5></div></a>
                    <a href="/sermons"><div className={'TheBenefitsOfJoining_3'}><h5>WATCH AND LISTEN TO OUR SERMONS</h5></div></a>
                    <a href="/sermons"><div className={'TheBenefitsOfJoining_4'}><h5>WATCH AND LISTEN TO OUR SERMONS</h5></div></a>
                </div>
            </div>
            <UpcomingSermons/>
            <div className={'WantToServeTheWorld'}>
                <div className={'wtstw_section'}>
                    <div className={'wtstw_contentSection'}>
                        <div>
                            <h2>We want to <br/> serve the world <br/> around us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do.</p>
                            <a href="/about"><MyButton width={162} height={64}>Visit</MyButton></a>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}><img src={quoteIco} alt=""/></div>
                    </div>
                    <div className={'wtstw_section_footer'}></div>
                </div>
            </div>
            <div className={'ReadOurBlog'}>
                <p className={'Label02'}>Read our Blog</p>
                <h2 style={{margin:'18px 0px 64px'}}>SHARE, INSPIRE, INNOVATE</h2>
                <div className={'ReadOurBlog_posts'}>
                    <a href="/sermons"><InfoCard2 name={'Relationship'} title={'WATCH AND LISTEN TO OUR SERMONS'}
                               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
                               author={'By Mathew Johnson'} date={'Tuesday 13 May, 2021'}/></a>
                    <a href="/sermons"><InfoCard2 name={'Relationship'} title={'WATCH AND LISTEN TO OUR SERMONS'}
                               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
                               author={'By Mathew Johnson'} date={'Tuesday 13 May, 2021'}/></a>
                    <a href="/sermons"><InfoCard2 name={'Relationship'} title={'WATCH AND LISTEN TO OUR SERMONS'}
                               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
                               author={'By Mathew Johnson'} date={'Tuesday 13 May, 2021'}/></a>
                    <a href="/sermons"><InfoCard2 name={'Relationship'} title={'WATCH AND LISTEN TO OUR SERMONS'}
                               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
                               author={'By Mathew Johnson'} date={'Tuesday 13 May, 2021'}/></a>
                </div>
            </div>
        </div>
    );
};

export default Home;