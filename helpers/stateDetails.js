const axios = require('axios');

//const api_url = `https://api.covid19api.com/countries`;
const api_url = `https://api.covidindiatracker.com/state_data.json`;

async function stateDetails(){
    try{
        const results = await axios.get(`${api_url}`);
        console.log('jjjjjjjjj',results.data);
        const final = results.data;
    return final;
    } catch(error){
        console.error(error);
    }
}

module.exports= { stateDetails };