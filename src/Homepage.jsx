import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import NavBar from "./navbar commponenet/NavBar";
import './styles/Home/home.css'
import Trends from "./treends/Trends";
import HomeLive from "./tweets/comment/homelive";
import useFetch from "./useFetch";
function Home() {
    const {trendsdata , loading , error , tweetsData , tweetloading , tweetError} = useFetch("http://localhost:8000/data","http://localhost:5000/tweets")
    return ( 
        <div className="main-home-component">
            <NavBar />
            {tweetsData &&  <HomeLive tweetsData={tweetsData} />}
            {/* {error && <h3>{ error }</h3>}
            {loading && <h3>loading...</h3>} */}
            {trendsdata && <Trends trendsdata={trendsdata} />}
        </div>
     );
}

export default Home;
