import Form from "./Form";
import "./homepage.css"

const Hero = () => {
    return ( 
        <div className="container">
            <div className="banner">
                <div className="logo"></div>
                <h1 className="title">Apex Legends Tracker</h1>
            </div>
            <Form />
        </div>
     );
}
 
export default Hero;