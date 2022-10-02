import React from 'react';
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './SlideShow.css';
export const SlideShow1=()=>{
    const images = [
        "https://n.nordstrommedia.com/id/a5e260e1-2db5-4ba6-8061-fef839a85b85.jpeg?h=720&w=1608",
        "https://n.nordstrommedia.com/id/45291620-1f1f-49c7-a59e-e8cfe7d2f62c.jpeg?h=720&w=1608",
        "https://n.nordstrommedia.com/id/7e51c440-a733-4564-b478-fb423570e888.jpeg?h=720&w=1608",
      ];
    return (
        <div >
            <Fade>
                <div className="each-slide"  >
                <div>
                    <img src={images[0]} />
                    <div className='SlideShowText'>
                    <p>Designer watches and sunglasses up to 70% off. Plus, up to 50% off the season's best bags.</p>
                    <div>
                    <a href="">Designer sunglasses </a>
                    <a href="">Designer Watches</a>
                    <a href="">See Restrictions</a>
                  </div> 
                    </div>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[1]} />
                    <div className='SlideShowText'>
                    <h1 className='SlideShowText_h1'>Ends October 2 at 11:59PM PT</h1>
                    <p>Online prices as marked; in store markdowns taken at register.</p>
                    <div>
                    <a href="">Barefoot Dreams</a>
                    <a href="">See Restrictions</a>
                  </div> 
                    </div>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[2]} />
                  <div className='SlideShowText'>
                  <h1 className='SlideShowText_h1'>Final Sale. Excludes Designer.</h1>
                    <p>Online prices as marked; in store markdowns taken at register.</p>
                    <div>
                    <a href="">Clearance Shoes </a>
                    <a href="">See Restrictions</a>
                  </div>
                    </div>
                </div>
                </div>
            </Fade>
        </div>
      );
} 


export const SlideShow2=()=>{
    const images = [
    "https://n.nordstrommedia.com/id/8eb91634-bb68-4215-8e16-8c8bd955ddeb.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/id/309e2ea5-d460-4cf3-9a1b-8d6936c6222d.jpeg?h=720&w=1608",
    "https://n.nordstrommedia.com/id/a4b98242-b9a5-4500-a77d-e9d093b5c017.jpeg?h=720&w=1608",
     "https://n.nordstrommedia.com/id/a832a41d-ad30-4687-baf7-bf5f61ebe542.jpeg?h=720&w=1608"     
];
    return (
        <div >
            <Fade>
                <div className="each-slide"  >
                <div>
                    <img src={images[0]} />
                    <div className='SlideShowText'>
                  <h1 className='SlideShowText_h1'>Online & In Stores </h1>
                    <p>Styles for the family you'll only find here.</p>
                    <div>
                    <a href="">Men's</a>
                    <a href="">Women's</a>
                    <a href="">Kids</a>
                  </div>
                    </div>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[1]} />
                    <div className='SlideShowText'>
                  <h1 className='SlideShowText_h1'>Women's Styles from $15</h1>
                    <p>Online and in stores.</p>
                    <div>
                    <a href={`https://www.nordstromrack.com/c/womens-rack-essentials?filterByProductType=clothing_shirts&filterByProductType=clothing_tank-tops&filterByProductType=clothing_t-shirts`}>Women's Rack Essentials</a>
                  </div>
                    </div>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[2]} />
                    <div className='SlideShowText'>
                  <h1 className='SlideShowText_h1'>Men's Styles from $15</h1>
                    <p>Online and in stores.</p>
                    <div>
                    <a href="https://www.nordstromrack.com/c/mens-rack-essentials?=&filterByProductType=clothing_tank-tops&filterByProductType=clothing_t-shirts">Men's Rack Essentials</a>
                  </div>
                    </div>
                </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={images[3]} />
                    <div className='SlideShowText'>
                  <h1 className='SlideShowText_h1'>Kids' Styles Under $30</h1>
                    <p>Online and in stores.</p>
                    <div>
                    <a href="https://www.nordstromrack.com/c/kids-rack-essentials?campaign=kidsrackessentials">Shop Rack Essentials</a>
                  </div>
                    </div>
                </div>
                </div>
            </Fade>
        </div>
      );
} 






