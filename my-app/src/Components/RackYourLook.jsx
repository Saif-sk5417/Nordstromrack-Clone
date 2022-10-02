import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from "./RackYourLook.css"
const RackYourLook = () => {
    const images = [
        
        "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0MzczNDY0LjUyODE5MTYxNzc4LmpwZWc=.jpg?w=640&h=640&fit=cover",
        "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ1MzA3NTM4LjQzMjE1NzU1MTU5OC5qcGVn.jpg?w=640&h=640&fit=cover",
        "https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjQ0OTU2MDExLjA1NzIyOTM2NTE1Ny5qcGVn.jpg?w=640&h=640&fit=cover",
        "https://cdn.dashhudson.com/media/640/1631993473.42439544038.jpeg",
        "https://cdn.dashhudson.com/media/640/1635024938.355172968493.jpeg",
        "https://cdn.dashhudson.com/media/640/1635798101.057760741882.jpeg",
        "https://cdn.dashhudson.com/media/640/1628598956.37983440346.jpeg",
        "https://cdn.dashhudson.com/media/640/1625812071.39856985243.jpeg",
        "https://cdn.dashhudson.com/media/640/1626312391.206982943516.jpeg",
        "https://cdn.dashhudson.com/media/640/1619542695.85628681795.jpeg",
    ];

    return (
        <div>
            <div className='RackYourLook'>
                <h2>Rack Your Look</h2>
                <p>Click your favorite photos to shop our Instagram, and use #nordstromrack for a chance to be featured!</p>
            </div>
        <Slide slidesToScroll={5} slidesToShow={5} indicators={true}>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                </div>
            </div>
            <div className="each-slide-effect" id='RackYourLook_each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[9]})` }}>
                </div>
            </div>
        </Slide>
        </div>
    );
};

export default RackYourLook;