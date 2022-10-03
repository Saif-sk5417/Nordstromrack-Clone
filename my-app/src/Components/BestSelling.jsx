import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ClothBox from './ClothBox';
import styles from './Brands.css'
const BestSelling = () => {
    const images = [
"https://n.nordstrommedia.com/id/sr3/8d1f81c0-49c8-4a8d-a491-3ee516a981a2.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/271be165-8deb-4dc0-bc57-34ba30164e29.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/1160db62-41ef-45f2-a6bc-34021b497446.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/922b2746-5662-46d8-a31f-83bc84e5b2e6.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/738b93eb-cf72-4316-8d11-d4b8cd07bca1.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/d58ece58-c8fd-4d2f-afe1-283046d10c07.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/02fd677e-46c9-4da7-b4cd-49f4fd8aa27d.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/d58ece58-c8fd-4d2f-afe1-283046d10c07.jpeg?q=45&dpr=2&h=365.31&w=230",
"https://n.nordstrommedia.com/id/sr3/b329620a-cebb-4cce-8101-870fa9fba062.jpeg?q=45&dpr=2&h=365.31&w=230",
         ];
     

    return (
        <div>
            <h1 className='TrendingNow_h1'>Best-selling items</h1>
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

export default BestSelling;