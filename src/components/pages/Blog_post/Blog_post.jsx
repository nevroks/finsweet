import React from 'react';
import './blogPost.css'
import img1 from '../../../sourses/pages/BlogPostPage/53m8pcXQQE4.png'
import img2 from '../../../sourses/pages/BlogPostPage/GDokEYnOfnE.png'
const BlogPost = () => {
    return (
        <div className={'blogPost'}>
            <div className="blogPost_header">
                <p className={'Cap03'}>Relationship</p>
                <h2>HOW TO SHOW COMPASSION</h2>
                <div>
                    <p>13 May, 2018</p>
                    <p style={{marginLeft:13}}>By Mathew Johnson</p>
                </div>
                <img src={img1} alt=""/>
            </div>
            <div className="blogPost_content">
                <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                <p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
                <img src={img2} alt=""/>
                <h4>LOREM IPSUM DOLOR SIT AMET</h4>
                <p>Aenean vel elit scelerisque mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Elementum eu facilisis sed odio morbi. Nam at lectus urna duis convallis convallis tellus id. Feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus. Sit amet porttitor eget.</p>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                <h4 style={{marginTop:40}}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h4>
                <p>We both celebrate and challenge the culture around us as we orient our lives around Jesus. We want to serve the world around us. It’s why we support mission work all across the globe Regardless of what your next step in faith is, we want to help you take that next step Our church is10% of our annual income to</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Purus sit amet luctus venenatis lectus magna</li>
                    <li>Aenean vel elit scelerisque mauris. Imperdiet sed euismod</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Non tellus orci ac auctor augue mauris augue neque gravida.</p>
                <p>Saepe magni aut maxime vel voluptatem. Ab eveniet neque placeat qui porro ab minus voluptas. Dicta praesentium neque vero mollitia aperiam sed enim. Lacinia quis vel eros donec ac odio.</p>
            </div>
        </div>
    );
};

export default BlogPost;