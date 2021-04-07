const fetch = require("node-fetch");

//format data received from fetch
const formatData = async (json) => {
    const seasonRegexWins = /(season\d+Wins)|(seasonWins)/gm;
    const wins = Object.entries(json.data.segments[0].stats).filter(winsData => {return winsData[0].match(seasonRegexWins)??false})
    const userData = {
        userId: json.data.platformInfo.platformUserHandle,
        avatarUrl: json.data.platformInfo.avatarUrl,
        platform: json.data.platformInfo.platformSlug,
        country: json.data.userInfo.countryCode,
        level: json.data.segments[0].stats.level.value,
        rankScore: json.data.segments[0].stats.rankScore,
        totalKills: json.data.segments[0].stats.kills.value, 
        activeLegend: {
            name: json.data.segments[1].metadata.name,
            img: json.data.segments[1].metadata.imageUrl
        },
        winsPerSeason: Object.fromEntries(wins)
    };
    return userData
}

const getUserData = async (req, res) => {
    try {
        const {platform, username} = req.params;
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;
        const headers = {
            "TRN-Api-Key":apiKey
        }

        const response = await fetch(`${apiUrl}/profile/${platform}/${username}`, {headers:headers});
        const json = await response.json();
        //check errors
        if(json.errors && json.errors.length > 0) {
            return res.status(404).json(json.errors);
        }

        const formatedData = await formatData(json)
        res.json(formatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message)
    }
}

module.exports = getUserData;