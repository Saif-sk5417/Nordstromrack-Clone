
import styles from './Navbar.css'

export default function Navbar(){
    return(
        <div>
            <div className='Navbar_head'>
                <p>EXTRA 60% OFF clearance shoes online & in stores now through Oct. 2. Restrictions apply.<a href=""> Shop Clearance Shoes.</a></p>
            </div>
        <div className="Navbar_Main">
            <div className="Navbar_img">
                <img className="logo_img"  src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt="Logo-_img"/>
            </div>
            <div  className="Navbar_searchbar">
                <input type="text"  placeholder='Search for Product Brands'/>
            </div>
            <div>
                <button className='Navbar_Button'>Sign In</button>
            </div>
            <div>
                <button className='Navbar_Button'>Sign Up</button>
            </div>
        </div>
        </div>
    )
}