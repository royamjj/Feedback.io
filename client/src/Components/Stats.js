import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

function Stats(){
    const {feedbacks, isLoading} = useContext(FeedbackContext)
    var sum=0;
    for(let i of feedbacks){
        sum+=i.rating;
    }
    var average = (sum/feedbacks.length).toFixed(1);
    if(isLoading){
        return(<></>);
    }
    return(
        <div className="feedback-stats">
            <p>Comments ({feedbacks.length})</p>
            <p>Average ratings: {isNaN(average) ? 0 : average}</p>
        </div>
    );
}
export default Stats;