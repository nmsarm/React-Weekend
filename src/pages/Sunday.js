// Components
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';

// Stylesheet
import '../styles/Sunday.css'

const Sunday = () =>{
    return(
        <>
             <Jumbotron 
                title = "My Sunday"
                desc = " Went to church, slept, went out for a while, and did some school works. 😇"
                href = "#schedule-section"
                btntext = "See Activities"
            />
            <section className="schedule-section" id="schedule-section">
                <div className="container-fluid verticalCenterContainer bg-light justify-content-center">
                    <div class="table-wrapper">
                        <h3 className="text-center p-3 bg-warning fw-bold">
                            Sunday Activities
                        </h3>
                        <table class="sun-tbl">
                            <tr>
                            <th>Time</th>
                            <th>Activity</th>
                            </tr>
                            <tr>
                            <td>8:00 AM - 10:00 AM</td>
                            <td>Church</td>
                            </tr>
                            <tr>
                                <td>10:00 AM - 12:00 PM</td>
                                <td> Lunch Break / Tambay </td>
                            </tr>
                            <tr>
                                <td>12:00 PM - 4:00 PM</td>
                                <td> Sleep </td>
                            </tr>
                            <tr>
                                <td> 4:00 PM - 6:00 PM</td>
                                <td> House Visit / Drive </td>
                            </tr>
                            <tr>
                                <td> 6:00 PM - 7:00 PM</td>
                                <td> Dinner Break </td>
                            </tr>
                            <tr>
                                <td> 7:00 PM - 10:00 PM</td>
                                <td> Schoolworks and Backlogs </td>
                            </tr>
                            <tr>
                                <td> 10:00 PM - 12:00 AM</td>
                                <td> Chill </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Sunday