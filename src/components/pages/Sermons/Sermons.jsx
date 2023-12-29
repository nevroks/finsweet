import React from 'react';
import './Sermons.css'
import UpcomingSermons from "../../UI/UpcomingSermonsSection/UpcomingSermons";
import InfoCard from "./sermonsUiComponents/InfoCard";
const Sermons = () => {
    return (
        <div>
            <div className="sermon_header">
                <p>SERMON</p>
                <h2>take part in OUR SERMON</h2>
            </div>
            <div>
                <UpcomingSermons/>
            </div>
            <div className={'ViewAllEvents'}>
                <h2>View All Events</h2>
                <div className={'ViewAllEvents_events'}>
                    <a href="/sermon_event"><InfoCard even={'100 random acts of kindness'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/></a>
                    <a href="/sermon_event"><InfoCard even={'Faith is a process, not a destination'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/></a>
                    <a href="/sermon_event"><InfoCard even={'there is nothing impossible'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/></a>
                    <a href="/sermon_event"><InfoCard even={'WATCH AND LISTEN TO OUR SERMONS'} tex={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} tim={'Friday 23:39 IST Saturday 11:20 ISD'} place={'No 233 Main St. New York, United States'}/></a>
                </div>
            </div>
        </div>
    );
};

export default Sermons;