import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

import '../styles/Home.css'

const Home = () =>{
    return(
        <>
            <Jumbotron 
                title = "Hi, I'm Daneah!"
                desc = "Welcome to my weekend. ✨"
                href = "#popup1"
                btntext = "Things I Did"
            />
            {/* Pop up Modal Box */}
            <div id="popup1" class="overlay">
                <div class="popup">
                    <h2><b>Things I Did</b></h2>
                    <a class="close" href="#">&times;</a>
                    <div class="content">
                        <ul> 
                            <br/>
                            <li> WPR </li>
                            <li> Answer Survey </li>
                            <br/>
                            <li> Attend Saturday Class </li>
                            <li> Grocery </li>
                            <li> Catch Up with Friends </li>
                            <br/>
                            <li> Go to Church </li>
                            <li> Organize List of Seminars </li>
                            <li> Register for Seminars </li>
                            <li> Review Lessons </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home