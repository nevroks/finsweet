import React from 'react';
import './Blog.css'
import image from '../../../sourses/pages/BlogPage/EMZxDosijJ4.png'
import MyButton from "../../UI/Button/MyButton";
import BlogPostCard from "./blogUiComponents/BlogPost_card";
const Blog = () => {
    return (
        <div className={'blog'}>
            <div className={'ourBlog'}>
                <p className={'Label02'}>OUR BLOG</p>
                <h2>most recent post</h2>
                <div className={'mostRecentPost'}>
                    <div><img src={image} alt=""/></div>
                    <div className={'mostRecentPost_content'}>
                        <div className={'anegri'}>
                            <p className="Label02">Tuesday 13 May, 2022</p>
                            <p className="Label02">By John Hunau Deo</p>
                        </div>
                        <div>
                            <h4>Church was doing what he often did when dropped An oracle </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                            <a href="/blog_post"><MyButton width={205} height={64}>Read more</MyButton></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'allBlogPosts'}>
                <h2>ALL BLOG POSTS</h2>
                <div className={'allBlogPosts_posts'}>
                    <a href="/blog_post"><BlogPostCard title={'THE BEST WAY TO INSPIRE PEOPLE'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'HOW TO SHOW COMPASSION'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'THE BIBLICAL PURPOSE OF MONEY'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'THE BEST WAY TO INSPIRE PEOPLE'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'WHAT IT MEANS TO BE A DISCIPLE'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'WHAT IT MEANS TO BELIEVE'}/></a>
                    <a href="/blog_post"><BlogPostCard title={'the modern chruch in 2022'}/></a>
                </div>
            </div>
        </div>
    );
};

export default Blog;