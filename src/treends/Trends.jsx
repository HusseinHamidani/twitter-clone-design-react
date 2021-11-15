import { Link } from 'react-router-dom'
import '../styles/trends/trends.css'
const Trends = ({trendsdata}) =>{    
    return(
        <div className="mainTrendsContianer">
                <div className="mainserchbarcontainer">
                    <label className="input-label-holder">
                        <div className="the-main-search-logo-container">
                            <div className="logo-hanler">
                            <i class="fas fa-search logo-search"></i>
                            </div>
                        </div>
                        <div className="the-main-search-input-container">
                            <div className="the-main-search-input-hanler">
                                <input type="text" name="" id="" placeholder="Search Twitter"/>
                            </div>
                        </div>
                    </label>
                </div>
            <div className="trends-for-you-main-container">
                <div className="trends-foru-text-hander">
                    <h2 className="the-main-text-hanlder">
                        Trends for you
                    </h2>
                    <Link to="setting.trend">
                    <i class="fas fa-cogs"></i>
                    </Link>
                </div>
                    {
                        trendsdata.trends.map((singleTrends) => (
                            <div key={singleTrends.id} className="mainTrendsGenerator">
                                <h4 className="single-hash">{singleTrends.trend1}</h4>
                                <h4 className="single-hash">{singleTrends.trend2}</h4>
                                <h4 className="single-hash">{singleTrends.trend3}</h4>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}
export default Trends