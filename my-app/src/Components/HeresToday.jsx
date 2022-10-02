



import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './HeresToday.css'
    const images = [
        "https://n.nordstrommedia.com/id/2f67fe48-9c38-4b41-9a7f-29c977ada670.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/1f17cb56-e93f-4d63-b4c2-e16ec42d9d60.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/3132d2de-df80-4cb1-9bf2-56aecdaaf14d.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/413cf100-d267-405e-af08-c8150f5497e9.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/9967dc34-f72e-444c-9f0c-c7ae0fd82cd0.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/18290cb8-d8c1-41ea-9a5e-4f31915516e7.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/8c949249-18a2-495b-8ce4-00946746fc50.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/37e5801f-8c48-4b7e-874a-0d66ad494dae.jpeg?h=1224&w=1224",
        "https://n.nordstrommedia.com/id/ba582ed7-7f54-4cd1-997e-1642c40c71a2.jpeg?h=1224&w=1224"
    ];
const HeresToday = () => {
    return (
        <div className='HeresToday'>
            <h1>Here Today, Gone in a Flash</h1>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true}>
                  <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
                <p className='Pbold'>360 Cashmere & More Up to 60% Off</p>
                <p>Event ends in 3 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
                <p className='Pbold'>Cole Haan Men's Shoes Up to 55% Off</p>
                <p>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
                <p className='Pbold'>Running & Active Sneakers for the Family Under $50</p>
                <p>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
                <p className='Pbold'>360 Cashmere & More Up to 60% Off</p>
                <p>Event ends in 3 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
                <p className='Pbold'>Cole Haan Men's Shoes Up to 55% Off</p>
                <p>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
                <p className='Pbold'>Running & Active Sneakers for the Family Under $50</p>
                <p className='Pbold'>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                </div>
                <p className='Pbold'>360 Cashmere & More Up to 60% Off</p>
                <p>Event ends in 3 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                </div>
                <p className='Pbold'>Cole Haan Men's Shoes Up to 55% Off</p>
                <p>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                </div>
                <p className='Pbold'>Running & Active Sneakers for the Family Under $50</p>
                <p>Event ends in 2 days, 1 hour, and 53 minutes</p>
            </div>
            </Slide>
        </div>
    );
};

export default HeresToday;