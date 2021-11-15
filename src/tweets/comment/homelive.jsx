import '../../styles/homelive/homelive.css'
import linus from '../../images/linus.jpg'
import { Link } from 'react-router-dom';
const HomeLive =({tweetsData})=>{
    console.log(tweetsData);
    let mantweet = tweetsData.map((shit) => {
        console.log(shit.tweetid);
    })
    
    return(

        <div className="the-main-home-and-post-component">
            <div className="hometitle">
                <div className="Home-title">
                    <h2 className="Home-title-word">Home</h2>
                </div>
                <div className="star-title">
                <i class="far fa-star"></i>
                </div>
            </div>
            <div className="tweet-on-home">
                <div className="image-and-tweet">
                    <img src={linus} alt="" />
                    <input type="text" name="" id="" className="tweet-input" placeholder="what's happing?"/>
                </div>
                <div className="emoje-and-tweet">
                    <div className="tweetbtn">
                        <input type="button" value="Tweet"/>
                    </div>
                </div>
            </div>
            <main className="main-tweets-hanlder">
                {
                    tweetsData.map((singleTweet) => (
                        <div key={singleTweet.tweetid} className="main-tweet-hanlder">
                            <div className="tweet-hanlder">
                                <h4 className="tweet-title">{ singleTweet.name}</h4>
                            </div>
                            <div className="tweet-text-hanlder">
                                <span className="text-tweet">{singleTweet.tweet}</span>
                            </div>
                            <div className="comment-likes-retweet-shar">
                                <Link to="/comment" >
                                    <i class="far fa-comment"></i>
                                </Link>
                                <Link to="/retweet" >
                                <i class="fas fa-retweet"></i>
                                </Link>
                                <Link to="/likes" >
                                    <i class="far fa-heart"></i>
                                </Link>
                                <Link to="/share" >
                                <i class="far fa-share-square"></i>
                                </Link>

                            </div>
                        </div>
                    ))
                }
            </main>

        </div>
    )
}
export default HomeLive;