import { Link } from "react-router-dom";
import linus from '../images/linus.jpg'
import '../styles/navbar styles/navbar.css'
const NavBar =()=>{
    return(
        <div className="navMainContaner">
            <header className="head">
                <Link className="head-Link" to="">
                    <div className="twitter-icone">
                    <i class="fab fa-twitter fa-2x"></i>
                    </div>
                </Link>
            </header>
            <nav className="navbar">
                <ul className="ulbar">
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                                <i class="fas fa-house-user fa-lg"></i>
                                <span>ali</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                                <i class="fas fa-hashtag fa-lg"></i>
                                <span>Explore</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                                <i class="far fa-bell fa-lg"></i>
                                <span>Notifications</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                                <i class="far fa-envelope fa-lg"></i>
                                <span>Messages</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                            <i class="far fa-bookmark fa-lg"></i>
                                <span>Bookmarks</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                            <i class="far fa-list-alt fa-lg"></i>
                                <span>Lists</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                        <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                            <i class="far fa-user fa-lg"></i>
                                <span>profile</span>
                            </div>
                        </Link>
                    </li>
                    <li className="liLinks">
                    <Link className="linktag" to="/">
                            <div className="HomeLink singleLink">
                            <i class="fas fa-ellipsis-h"></i>
                                <span>more</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="make-tweet">
                <Link className="make-tweet-button" to="/">
                    <button>Tweet</button>
                </Link>
            </div>
            <div className="Profile_and_email-hanler">
                <Link className="email-link" to="/">
                    <div className="profileContaner">
                        <img className="profile-image" src={linus} alt="" />
                        <div className="profile-info">
                            <h4 className="profile-name">hussein ali</h4>
                            <span className="profile-email">@ihoavenoFidea.com</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default NavBar;