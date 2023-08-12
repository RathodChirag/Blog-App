import { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/api/categories")
            setCats(res.data);
        }
        getCats();
    }, [])



    return (
        <div className='sidebar'>

            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="data:image/jpeg;base64,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" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio aliquam
                    consequuntur, nemo reiciendis neque, aliquid perspi. </p>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'> 
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className='link'>
                        <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    )
                    )}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}
