import styles from './SeasonSavings.css'
import { Grid, GridItem } from '@chakra-ui/react'


export default function SeasonSavings(){
    return (
        <div className='SeasonSavings'>
            <h1>Season's Savings</h1>
            <div className='SeasonSavings_main' >
            <div>
            <img src="https://n.nordstrommedia.com/id/687fe380-cca1-433f-bd11-7bd35fa9b2fa.jpeg?h=555&w=804" alt="" srcset="" />
            <div className='SeasonSavings_box' >
                <p id='head'>Just in—and So Good</p>
                <p>Good American, Madewell, Steve Madden and more.</p>
                <a href="https://www.nordstromrack.com/c/new-arrivals-women?campaign=wnewarrivals">New Arrivals</a>
            </div>
            </div>
            <div>
            <img src="	https://n.nordstrommedia.com/id/af5188b4-06b3-41d0-9c93-bff368ebcbfd.jpeg?h=555&w=804" alt="" srcset="" />
            <div className='SeasonSavings_box' >
                <p id='head'>MAC Cosmetics, Urban Decay & More</p>
                <p>Try the fall trends, from really red lips to graphic, winged liner.</p>
                <a href="https://www.nordstromrack.com/shop/beauty/makeup?campaign=makeup">Makeup</a>
            </div>
            </div>
            </div>
            </div>
     
    )
}