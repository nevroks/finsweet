import React from 'react';
import classes from "./BlogPost_card.module.css";

const BlogPostCard = (props) => {
    return (
        <div className={classes.BlogPostCard}>
            <div className={classes.BlogPostCard_content}>
                <p className={'Cap03'}>Relationship</p>
                <h5>{props.title}</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <p style={{margin:'48px 0 6px'}} className={'Label03'}>By Mathew Johnson</p>
                <p style={{marginBottom:32}}>Tuesday 13 May, 2018</p>
            </div>
        </div>
    );
};

export default BlogPostCard;