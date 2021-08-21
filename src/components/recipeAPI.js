import axios from "axios";
const YOUR_APP_ID = "585720ac";
const YOUR_APP_KEY = "dd517e7f881c4aa1e8b22fbc66673df8";


const getReply = (query) => {

    const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return axios({
        "method": 'post',
        "url": API_URL,
        "headers": {
            "Content-Type": "application/json",
            "accept": "application/json",
            "x-app-id": "585720ac",
            "x-app-key": "dd517e7f881c4aa1e8b22fbc66673df8"
        },
        "data":
            "{\"query\": \"" + query + "\"}"


    });
};


const getRecipe = (query) => {

    const showReply = (reply) => {
        if (reply) {

            const recipes = reply.hits;

            let result = [];
            recipes.map(recipe => {
            return result.push(recipe["recipe"]["label"])});
            return result;
        }
        else {
            return "Sorry, I didn't get that. Please tell me again.";
        }

    };

    // // const reply = getReply(query);
    return getReply(query).then((res) => showReply(res.data));

};

export default getRecipe;