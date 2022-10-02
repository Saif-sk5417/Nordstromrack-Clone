
import styles from './MoreToKnow.css'

export default function MoreToKnow(){
    return (
        <div className="MoreToKnow">
            <h1>More to Know</h1>
            <div className="MoreToKnow_main">
                <div>
                    <img src="https://n.nordstrommedia.com/id/7951cd5a-d369-4c69-b00a-a5c2195923e4.jpeg?h=188&w=402" alt="img" />
                    <div className="MoreToKnow_main_text" >
                        <p className="PBold">An Exclusive Offer</p>
                        <p>{`
                        Just for new Nordstrom credit
                         cardmembers. Restrictions apply.
                        `}</p>
                        <a href="">Apply Now</a>
                    </div>
                </div>
                <div>
                    <img src="https://n.nordstrommedia.com/id/1a5f47b0-34d2-4a65-bbe8-00353b741870.jpeg?h=188&w=402" alt="img" />
                    <div className="MoreToKnow_main_text" >
                        <p>{`
                        We're celebrating Hispanic and Latinx
                         communities, and their incredible impact 
                         on our country and the world.
                        `}</p>
                        <a href="">Aprende Más</a>
                    </div>
                </div>
                <div>
                    <img src="	https://n.nordstrommedia.com/id/2961092c-5387-4c52-9c94-1379fe2ac7ec.jpeg?h=188&w=402" alt="img" />
                    <div className="MoreToKnow_main_text" >
                        <p className="PBold">We Launched a Podcast!</p>
                        <p>{`
                        Join Pete Nordstrom and special guests for
                         a behind-the-scenes look at Nordstrom. 
                        `}</p>
                        <a href="">Listen to All Episodes</a>
                    </div>
                </div>
                <div>
                    <img src="https://n.nordstrommedia.com/id/740cce24-d4db-41d4-97d3-b3b9bedb2418.jpeg?h=188&w=402" alt="img" />
                    <div className="MoreToKnow_main_text" >
                        <p className="PBold">We're in Your Neighborhood</p>
                        <p>{`
                        Shop with extra safety measures.
                        `}</p>
                        <a href="">Find Your Rack</a>
                    </div>
                </div>
            </div>
        </div>
    )
}