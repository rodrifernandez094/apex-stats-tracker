import {useHistory, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import "./error.css"

const Errors = () => {
    const [error, setError] = useState(null)
    const errMessage = useHistory().location.state;
    useEffect(() => {
        setError(errMessage)  
    }, [errMessage])

    return ( 
        <div className="error-container">
            {error && 
            <div className="error-box">
                <h1> {error} </h1>
                <button className="btn"><Link to="/" >Go back</Link></button>
            </div>
            }
        </div>
     );
}
 
export default Errors;
