import axios from 'axios';

export const getTeams = async () => {
    const response = await axios.get('/teams.json');
    return response.data; 
};

export const getSportsEvents = async () => {
    const response = await axios.get('/sportsEvents.json');
    return response.data;
};

export const sendPrediction = async (data) => {
    try{


        const response = await axios.post(
          "http://57.128.213.8:16385/api/post",
          data,
          {
            method: "POST",
            headers: {
              //"Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
    }
    catch(error){
        console.log(error);
    }
};
