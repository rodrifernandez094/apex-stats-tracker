import {useHistory, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import Gamertag from "./Gamertag";
import "./profile.css"
import StatsGrid from "./StatsGrid";


function getWins(stats){
    const seasonRegexWins = /(season\d+Wins)|(seasonWins)/gm;
    let wins = Object.entries(stats.winsPerSeason).filter(x => {return x[0].match(seasonRegexWins)??false})
   return wins.map((win, index) => {            
        let winObject = win[1]
        return(
        <div key={index} className="stats-card">
            <h4>{winObject.displayName}</h4>
            <span>{winObject.displayValue}</span>
        </div>
            )
    })
}

const Profile = () => {
    const [stats, setStats] = useState(null);
    const userStats = useHistory().location.state;

    useEffect(() => {
        setStats(userStats)
    }, [userStats])
           
    return (
        <div className="container">
            {stats && (
                <div className="profile">
                    <Gamertag userId={stats.userId} avatarImg={stats.avatarUrl} />
                    <StatsGrid winsPerSeason={getWins(stats)} 
                        level={stats.level} 
                        activeLegend={stats.activeLegend} 
                        rankScore={stats.rankScore}
                        totalKills={stats.totalKills}
                        platform={stats.platform}
                    />
                    <button className="btn"><Link to="/" >Go back</Link></button>
                    
                </div>
            )}
        </div>
     );
}
 
export default Profile;


