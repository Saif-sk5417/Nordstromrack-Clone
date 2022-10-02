
import styles from './Tabs.css'

export default function Tabs(){
    return (
       <div className="Tabs_Box"> 
        <hr />
         <div className="Tabs_Main">
            <p>Clearance</p>
            <p>Women</p>
            <p>Mens</p>
            <p>Kids</p>
            <p>Shoes</p>
            <p>Activewear</p>
            <p>Bags & Accessories</p>
            <p>Home</p>
            <p>Beauty</p>
            <p>Gifts</p>
            <p>Flash Events</p>
        </div>
        <div>
            <h1>More to Rack, easier and faster.</h1>
            <button className='Tabs_Button'>Sign In or Create an Account</button>
        </div>
       </div>
    )
}