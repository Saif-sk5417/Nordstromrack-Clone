import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ClothBox from './ClothBox';
import styles from './Brands.css'
const Brands = () => {
    const images = [
        "https://n.nordstrommedia.com/id/sr3/6bb77933-11a3-4b73-a01a-5febcfc9e523.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/9b82428d-0dbd-4727-a014-3c3f11ebd5b8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/c296dba6-535d-4ab3-95ea-67e12208f7d0.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/327d15ba-44e6-465e-a662-ece9c4b0e8dd.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/eb7f833d-6ce0-4f3d-8e65-3a87a889dcd8.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/31436b25-885f-4008-85cf-910e12c9c23c.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/ec14e5ee-e30b-4270-b0e9-74677f569276.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/7a5c452e-c2c0-4f66-a5c9-57ddb463ff64.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/4decc746-7706-4f7b-b904-923122a515dc.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/f8712d0f-a0b2-4c0a-bf58-80ab499ca16f.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/0987775a-9186-48f3-9d51-ee5b5872c0f3.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266",
        "https://n.nordstrommedia.com/id/sr3/81baa7db-3157-4632-9603-77a8198e0096.jpeg?q=45&fit=fill&fm=jpg&dpr=2&h=408&w=266"
         ];
     

    return (
        <Slide  slidesToScroll={6} slidesToShow={6} indicators={true}>
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
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[9]})` }}>
                </div>
                <ClothBox  name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[10]})` }}>
                </div>
                <ClothBox  name="T Tahari" price="$19.97 (65% off)" text="$58.00"/>
            </div>
            <div className="each-slide-effect" id="Brands_each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[11]})` }}>
                </div>
                <ClothBox name="Marc Jacobs" price="$82.97 (29% off)" text="$110.00"/>
            </div>
        </Slide>
    );
};

export default Brands;