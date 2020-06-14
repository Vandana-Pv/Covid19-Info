const axios = require('axios');

//const api_url = `https://api.covid19api.com/countries`;
const api_url = `https://api.covid19api.com/summary`;

async function getDetails(){
    try{
        const results = await axios.get(`${api_url}`);
        console.log('inside getdetails');
        console.log('jjjjjjjjj',results.data);
        const final = results.data;
    return final;
    } catch(error){
        console.error(error);
    }
}

module.exports= { getDetails };