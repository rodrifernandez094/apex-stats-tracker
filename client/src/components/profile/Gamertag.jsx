const Gamertag = (props) => {
    return ( 
        <div className="gamertag">
            <div className="platform-avatar">
                <img src={props.avatarImg} alt=""/>
            </div>
            <h1>{props.userId}</h1>
        </div>
     );
}
 
export default Gamertag;