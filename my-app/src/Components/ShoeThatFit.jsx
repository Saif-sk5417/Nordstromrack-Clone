import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Styles from './ShoeThatFit.css'
const ShoeThatFit = () => {

    const images = [
        "https://n.nordstrommedia.com/id/3ed9b826-acf3-41ac-8e7d-c5100bb1ee89.jpeg?h=200&w=1334" ,
        "https://n.nordstrommedia.com/id/c95fb04f-ef69-4dfd-a4ee-75e51ae5f4fa.jpeg?h=200&w=1608"
     ];
  return (
    <div>
        <Fade>
            <div className="each-slide" id='ShoeThatFit_each-slide'>
            <div>
                <img src={images[0]} />
            </div>
            </div>
            <div className="each-slide" id='ShoeThatFit_each-slide'>
            <div >
                <img  src={images[1]} />
              <div id ='ShoeThatFit_each-slide_secondtext'>
                <p className='PBold'>Help Give Shoes to Local Kids</p>
                <p>Make a difference for kids in our communities by giving them brand-new,</p>
                <p>properly fitting Nike shoes so they can run, play and thrive this school year</p>
                <a href="https://www.nordstromrack.com/promo/shoes-that-fit">Learn More About Shoes That Fit</a>
            </div>
            </div>
            </div>
        </Fade>
    </div>
  );
};

export default ShoeThatFit;