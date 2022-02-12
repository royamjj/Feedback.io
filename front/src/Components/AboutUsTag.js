import {FaQuestion} from "react-icons/fa";

import {Link} from "react-router-dom";

function AboutUsTag(){
    return(
        <div className="about-us-tag">
            <Link to="/about"><FaQuestion size={30}/></Link>
        </div>
    );
}
export default AboutUsTag;