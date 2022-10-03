import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ClothBox from './ClothBox';
import styles from './Brands.css'
const TrendingNow = () => {
    const images = [
        "https://n.nordstrommedia.com/id/sr3/6f1fde5b-e59f-448a-aa8a-5f0b7940e857.jpeg?q=45&dpr=2&h=365.31&w=230",
        "https://n.nordstrommedia.com/id/sr3/929456a3-dcf8-4c02-ad04-f54411950eb5.jpeg?q=45&dpr=2&h=365.31&w=230",
        "https://n.nordstrommedia.com/id/sr3/8ae0a64c-fa54-4710-9084-75dae1c0a3f7.jpeg?q=45&dpr=2&h=365.31&w=230",
        "https://n.nordstrommedia.com/id/sr3/f62f2dcb-96b9-4648-a0ac-6a6250bf776c.jpeg?q=45&dpr=2&h=365.31&w=230",
        "https://n.nordstrommedia.com/id/sr3/9ec26f57-b5fc-446e-a7b9-7f5de131897c.jpeg?q=45&dpr=2&h=365.31&w=230",
        "https://n.nordstrommedia.com/id/sr3/abe0f760-0902-46f4-a70f-8565626adb7a.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/0233686c-b0e5-437b-9f7a-0b6b525c0866.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/a269bbc8-00c7-4a05-b1bb-bef72c360e15.jpeg?q=45&dpr=2&h=365.31&w=230",
         ];
     

    return (
        <div>
            <h1 className='TrendingNow_h1'>Trending Now</h1>
        <Slide  slidesToScroll={4} slidesToShow={5} indicators={true}>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
                <ClothBox  name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
                <ClothBox name="T Tahari" price="$32.97 (69% off)" text="$108.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
                <ClothBox name="Marc Jacobs" price="$82.97 (29% off)" text="$110.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
                <ClothBox name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
                <ClothBox  name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
                <ClothBox name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                </div>
                <ClothBox name="T Tahari" price="$32.97 (69% off)" text="$108.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                </div>
                <ClothBox name="Marc Jacobs" price="$82.97 (29% off)" text="$110.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                </div>
                <ClothBox  name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
        </Slide>
        </div>

    );
};

export default TrendingNow;