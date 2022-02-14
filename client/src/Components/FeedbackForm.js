import { useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext";

function FeedbackForm(){

    const [review, setReview] = useState("");
    const [warning, setWarning] = useState(0);
    const [rating, setRating] = useState(10);
    const [btn, setBtn] = useState(0);

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);


    useEffect(() => {
        if(feedbackEdit.edit){
            setReview(feedbackEdit.item.review);
            setRating(feedbackEdit.item.rating);
            setBtn(1);
        }
        
    },[feedbackEdit]);



    function ReviewHandler(e){
        setReview(e.target.value);
        if(e.target.value===""){
            setBtn(0);
            setWarning(0);
        }
        else if(e.target.value.trim().length<10){
            setBtn(0);
            setWarning(1);
        }
        else if(e.target.value.trim().length>=10){
            setWarning(0);
            setBtn(1);
        }
    }
    
    function submitHanddler(e){
        e.preventDefault();
        if(review.trim().length > 10){
            const newFeedback = {
                review:review,
                rating:rating,
            }
            if(feedbackEdit.edit){
                updateFeedback(feedbackEdit.item._id,newFeedback);
                feedbackEdit.edit = false;
            }
            else{
                addFeedback(newFeedback);
            }
            setReview("");
            setRating(10);
            setBtn(0);
        }
    }
    return(
        <form className="feedback-form" onSubmit={submitHanddler}>
            <div className="feedback-form-text">How would you rate your service with us?</div>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="feedback-form-input">
                <input type="text" placeholder="Write your review here" onChange={ReviewHandler} value={review}/>
                <button type="submit" className={!btn ? "disabled-btn" : "feedback-submit-btn"}>Submit</button>
            </div>
            {warning ? <div className="warning">*Review should be more tham 10 characters!</div> : null}
        </form>
    );
}

export default FeedbackForm;