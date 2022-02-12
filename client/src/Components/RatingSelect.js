import { useState, useContext, useEffect } from "react";
import FeedbackContext from "./Context/FeedbackContext";



function RatingSelect({select}){
    const [selected, setSelected] = useState(10);
    const nums= [1,2,3,4,5,6,7,8,9,10];

    const {feedbackEdit} = useContext(FeedbackContext);

    useEffect(()=>{
        if(feedbackEdit.edit){
            setSelected(feedbackEdit.x.rating);
        }
    },[feedbackEdit]);


    function handleChange(e){
        setSelected(Number(e.target.value));
        select(Number(e.target.value));
    }
    return(
        <div className="rating-container" > 
            <ul className="rating"  >
            {nums.map(x =>
                <li key={x}>
                    <input 
                    type="radio" 
                    id={`num${x}`} 
                    name="rating" 
                    value={`${x}`} 
                    onChange={handleChange}
                    checked={selected===x}/>
                    <label htmlFor={`num${x}`}>{x}</label>
                </li>
            )}
            </ul>
        </div>
    );
}
export default RatingSelect;