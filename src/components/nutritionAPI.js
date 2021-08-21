import axios from "axios";
import { useState } from "react";
const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients"
// // dont know how to return res.data, so use a useState
// const [reply, setReply] = useState()
let reply
const getReply = (query) => {
    let reply = "1";

    reply = axios({
        "method": 'post',
        "url": API_URL,
        "headers": {
            "Content-Type": "application/json",
            "accept": "application/json",
            "x-app-id": "5786afa8",
            "x-app-key": "83fdb146365c88a93e310c7e0e5538e8"
        },
        "data":
            "{\"query\": \"" + query + "\"}"


    }).then(res => res.data);
    return reply;
};


const getNutrition = (query) => {

    const reply = getReply(query);
    return JSON.stringify(query) + "\n" + JSON.stringify(reply);

    if (reply) {
        return JSON.stringify(reply);
        // const food = reply.foods[0];

        // let reply_str = ""
        // reply_str += food.serving_qty + " " + food.serving_unit + " of " + food.food_name + "\n";
        // reply_str += "weight: " + food.serving_weight_grams + " g contain:\n";
        // reply_str += "calories: " + food.nf_calories + " kJ\n";
        // reply_str += "total fat: " + food.nf_total_fat + " g\n";
        // reply_str += "saturated fat: " + food.nf_saturated_fat + " g\n";
        // reply_str += "protein: " + food.nf_protein + " g\n";
        // reply_str += "sugars: " + food.nf_sugars + " g\n";
        // reply_str += "total carbohydrate: " + food.nf_total_carbohydrate + " g\n";
        // reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
        // reply_str += "cholesterol: " + food.nf_cholesterol + " mg\n";
        // reply_str += "sodium: " + food.nf_sodium + " mg\n";
        // reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
        // reply_str += "Sodium: " + food.nf_sodium + " mg\n";
        // reply_str += "Potassium: " + food.nf_potassium + " mg\n";
        // reply_str += "Phosphorus: " + food.nf_p + " mg\n";
        // return reply_str;
    }
    else {
        return "Sorry, I didn't get that, please try again.";
    }



};

export default getNutrition;