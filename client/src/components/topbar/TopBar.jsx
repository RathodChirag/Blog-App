import { useContext } from "react";
import "./topbar.css"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcons fa-brands fa-facebook"></i>
                <i className="topIcons fa-brands fa-instagram"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link">About</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link">Write</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to='/setting'>
                        <img className='topImage'
                            src={PF+user.profilePic}
                            alt="" />
                    </Link>
                ) :
                    (<ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">Register</Link>
                        </li>
                    </ul>)
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
