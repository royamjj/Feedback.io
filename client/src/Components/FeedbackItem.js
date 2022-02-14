import { useContext } from 'react';
import {FaTimes, FaEdit} from 'react-icons/fa';
import FeedbackContext from './Context/FeedbackContext';
import Loading from "./Loading";

function FeedbackItem(){

    const {feedbacks, deleteFeedback,EditHandler, isLoading} = useContext(FeedbackContext);
    
    if( !isLoading && feedbacks.length===0){
        return (
            <div style={{color:"white"}}>No feedbacks yet :(</div>
        );
    }
    return isLoading ? <Loading/> : feedbacks.map(x => ( 
        <div className="feedbackItem" key={x._id}>
            <div className="feedbackItem-rating">{x.rating}</div>
            <button className='close-btn' onClick={() => deleteFeedback(x._id)}><FaTimes color='#ff6e97'/></button>
            <button className='edit-btn' onClick={() => EditHandler(x)}><FaEdit color='#ff6a95'/></button>
            <div className="feedbackItem-text">{x.review}</div>
        </div>
        ))
}
export default FeedbackItem;