// Components
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import Footer from '../components/Footer';

// Stylesheet
import '../styles/Saturday.css'

// Media
import reactClass from '../assets/react-class.png';
import marquee from '../assets/marquee.jpg';
import friends from '../assets/friends.jpg';
import gamenight from '../assets/gamenight.MOV';

const Saturday = () =>{
    return(
        <>
             <Jumbotron 
                title = "My Saturday"
                desc = "Spent my day in class, at the mall, and catched up with my friends. 😎 "
                href = "#schedule-section"
                btntext = "See Activities"
            />
                <section className="schedule-section" id="schedule-section">
                <div className="container-fluid verticalCenterContainer bg-light justify-content-center">
                    <div class="table-wrapper">
                        <h3 className="text-center p-3 bg-warning fw-bold">
                            Saturday Activities
                        </h3>
                        <table class="sat-tbl">
                            <tr>
                                <th>Time</th>
                                <th>Activity</th>
                            </tr>
                            <tr>
                                <td>7:00 AM - 9:00 AM</td>
                                <td>IT ELEC4C - React Class</td>
                            </tr>
                            <tr>
                                <td>9:00 AM - 10:00 AM</td>
                                <td>Break</td>
                            </tr>
                            <tr>
                                <td> 10:00 AM - 1:00 PM </td>
                                <td>IT ELEC4C - React Class</td>
                            </tr>
                            <tr>
                                <td> 1:00 PM - 5:00 PM </td>
                                <td>Lunch, Grocery, and Gala </td>
                            </tr>
                            <tr>
                                <td> 5:00 PM - 10:00 PM</td>
                                <td> Chill / Sleep </td>
                            </tr>
                            <tr>
                                <td> 10:00 PM - 3:00 AM </td>
                                <td>Drink and Game Night with Friends</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <div className="container-fluid justify-content-center verticalCenterContainer">
            <div className="row">
                <div className="col-lg-12 col-sm-12 d-flex justify-content-center p-5 ">
                    {/* Card Component - Props */}
                    <Card 
                        className = "image1"
                        img = {reactClass}
                        title = "IT ELEC4C - React Class"
                        text = "We had our React class at 7 am to 1 pm. Our professor taught us the use of Props and SCSS and also the use of Cards. We used CodePen for coding."

                    />
                </div>
                <div className="col-lg-12 col-sm-12 d-flex justify-content-center p-5 ">
                    {/* Card Component - Props */}
                    <Card 
                        img = {marquee}
                        title = "Lunch, Grocery, and Gala "
                        text = "I went to Marquee Mall at Angeles City by myself for some 'me' time. I ate lunch, bought groceries, and shopped for a bit."

                    />
                </div>
                <div className="col-lg-12 col-sm-12 d-flex justify-content-center p-5">
                    {/* Card Component - Props */}
                    <Card
                        className = "pic2"
                        img = {friends}
                        title = "Drink and Game Night with Friends"
                        text = "At 10 pm, I catched up with my friends at Discord and played Pusoy Dos online. We had our kwentuhan session."
                    />
                </div>
                <div className="col-lg-12 d-flex justify-content-center p-5">
                    <video width="520" height="520" controls>
                        <source src={gamenight} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
            <Footer />

        </>
    );
}

export default Saturday