import './about.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from '../../components/topbar/topbar';

export default function About() {
    return (
        <>
            <Topbar />
            <div class="container">
            <div class="about-content">
                <h1>About Us</h1>
                <h2>Welcome to Our Website</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum bibendum elit eget nunc ullamcorper, at facilisis libero finibus. Quisque in dolor sit amet justo ullamcorper vestibulum. Duis tincidunt, turpis nec rhoncus tristique, arcu tellus sollicitudin arcu, ac tristique lectus lorem id mi.</p>
                <p>Our mission is to provide valuable information and insights to our readers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue velit nec volutpat.</p>
            </div>
            
            <footer>
                <p>&copy; 2023 Blog App. All rights reserved.</p>
            </footer>
        </div>
        </>
        
    )
}