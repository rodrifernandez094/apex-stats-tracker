const StatsGrid = (props) => {
    return ( 
        <div className="profile-container">

            <div className="stats-container">
                <h2>Active Legend</h2>
                <div className="stats-card">
                    <img src={props.activeLegend.img} alt=""/>
                    <h4> {props.activeLegend.name} </h4>
                </div>
            </div>

            <div className="stats-container" >
                <h2>Stats</h2>
                <div className="stats-card mb-2">
                    <h4>Level</h4>
                    <span>{props.level}</span>
                </div>
                <div className="stats-card mb-2">
                    <h4>Platform</h4>
                    <span>{props.platform}</span>
                </div>
                <div className="stats-card mb-2">
                    <h4>Rank</h4>
                    <span>{props.rankScore.metadata.rankName}</span>
                </div>
                <div className="stats-card mb-2">
                    <h4>Total Kills</h4>
                    <span>{props.totalKills}</span>
                </div>
            </div>

            <div className="stats-container" >
                <h2>Wins per season</h2>
                <div className="grid">
                    {props.winsPerSeason}
                </div>
            </div>
        </div>
     );
}
 
export default StatsGrid;