import {Link} from "react-router-dom";

function AboutPage(){
    return(
        <div className="about-us">
            <p className="about-us-heading">About us!!</p>
            <p>This is a practice project called feedback.io for practicing react</p>
            <p id="about-version">Version: 1.0.0</p>
            <Link to="/">Home</Link>
        </div>
    );
}
export default AboutPage;