import {SlideShow1 , SlideShow2}  from './Components/SlideShow1'
import SeasonSavings  from './Components/SeasonSavings';
import GoingSomeWhere from './Components/GoingSomeWhere'
import './App.css';
import MoreToKnow from './Components/MoreToKnow'
import HeresToday  from './Components/HeresToday';
import FooterTop from './Components/FooterTop'
import GetEmailUpdates from './Components/GetEmailUpdates'
import RackYourLook from './Components/RackYourLook'
import ShoeThatFit from './Components/ShoeThatFit'
import FooterLast from './Components/FooterLast'
import Tabs from './Components/Tabs';
import Navbar from './Components/Nvabar';
import ClothBox from './Components/ClothBox'
import Brands from './Components/Brands';
import TrendingNow from './Components/TrendingNow'
import BestSelling from './Components/BestSelling';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Tabs />
   <SlideShow1 />
   <Brands />
   <HeresToday />
   <SlideShow2 />
   <SeasonSavings />
   <TrendingNow />
   <ShoeThatFit />
   <GoingSomeWhere />
   <BestSelling />
   <MoreToKnow />
   <RackYourLook />
   <FooterTop />
   <GetEmailUpdates />
   <FooterLast />
    </div>
  );
}

export default App;
