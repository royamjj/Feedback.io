import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FeedbackItem from "./Components/FeedbackItem";

import Stats from "./Components/Stats";
import FeedbackForm from "./Components/FeedbackForm";

import AboutPage from "./Pages/AboutPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AboutUsTag from "./Components/AboutUsTag";

import {FeedbackProvider} from "./Components/Context/FeedbackContext";


function App(){
    return(
        <FeedbackProvider>
        <Router>
            <div className="app">
                <Header/>
                <Route path="/" exact>
                <FeedbackForm/>
                <Stats/>
                <FeedbackItem/>
                </Route>                
                <Route path="/about" component={AboutPage} />
                <AboutUsTag/>
                <Footer/>
            </div>
        </Router>
        </FeedbackProvider>
    );
} 

export default App;
