import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows, faPlaystation, faXbox} from "@fortawesome/free-brands-svg-icons";

const Form = () => {
    const [userInfo, setUserInfo] = useState({username:"", platform:""});
    const [isPressed, setIsPressed] = useState(null);
    const history = useHistory();
    
    const handleInput = (e) => {
        const username = e.target.value;
        setUserInfo(prevValue => {
            return {username: username, platform: prevValue.platform};
        })
    }

    const handlePlatform = (e) => {
        const platform = e.currentTarget.getAttribute('id');
        setUserInfo(prevValue => {
            return {username: prevValue.username, platform: platform}
        });

        setIsPressed(platform);
    }

    const sendRequest = async () => {
        try {
            const {username, platform} = userInfo;
            const response = await fetch(`/api/profile/${platform}/${username}`);
            if(!response.ok) {
                throw Error("We couldn't find that player.")
            }
            const data = await response.json();
            if(data) {
                history.push({pathname: `/api/profile`, state: data});
            }
        } catch (err) {
           history.push({pathname: "/error", state: err.message}) 
        }
    }

    return (
            <div className="form">
                <div className="platforms">
                    <div className={isPressed === "origin" ? "is-pressed" : "platform"} onClick={handlePlatform} id="origin">
                        <FontAwesomeIcon icon={faWindows} />
                    </div>
                    <div className={isPressed === "psn" ? "is-pressed" : "platform"}  onClick={handlePlatform} id="psn" required>
                        <FontAwesomeIcon icon={faPlaystation} />
                    </div>
                    <div className={isPressed === "xbl" ? "is-pressed" : "platform"}  onClick={handlePlatform} id="xbl">
                        <FontAwesomeIcon icon={faXbox} />
                    </div>
                </div>
                <input onChange={handleInput} type="text" name="username" placeholder="Enter your origin/psn/xbox username"/>
                <button className="btn" onClick={sendRequest}>Search</button>
            </div>
     );
}
 
export default Form;