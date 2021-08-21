import axios from "axios";
const API_URL = "https://trackapi.nutritionix.com/v2/natural/nutrients"

// used for debug
// let reply;
// const lst = []
// const populateDate = (data) => { reply = data; lst.push(reply) };

const getReply = (query) => {

    return axios({
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


    });
    // .then((res) => populateDate(res.data));

    // fetch(API_URL, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "accept": "application/json",
    //         "x-app-id": "5786afa8",
    //         "x-app-key": "83fdb146365c88a93e310c7e0e5538e8"
    //     },
    //     body:
    //         "{\"query\": \"" + query + "\"}"
    // }).then((res) => populateDate(res.data));

    //populateDate(query + " 32")

    // return reply;
};


const getNutrition = (query) => {

    const showReply = (reply) => {
        if (reply) {
            const food = reply.foods[0];

            let reply_str = ""
            reply_str += food.serving_qty + " " + food.serving_unit + " of " + food.food_name + "\n";
            reply_str += "weight: " + food.serving_weight_grams + " g contain:\n";
            reply_str += "calories: " + food.nf_calories + " kJ\n";
            reply_str += "total fat: " + food.nf_total_fat + " g\n";
            reply_str += "saturated fat: " + food.nf_saturated_fat + " g\n";
            reply_str += "protein: " + food.nf_protein + " g\n";
            reply_str += "sugars: " + food.nf_sugars + " g\n";
            reply_str += "total carbohydrate: " + food.nf_total_carbohydrate + " g\n";
            reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
            reply_str += "cholesterol: " + food.nf_cholesterol + " mg\n";
            reply_str += "sodium: " + food.nf_sodium + " mg\n";
            reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
            reply_str += "Sodium: " + food.nf_sodium + " mg\n";
            reply_str += "Potassium: " + food.nf_potassium + " mg\n";
            reply_str += "Phosphorus: " + food.nf_p + " mg\n";
            return reply_str;
        }
        else {
            return "Sorry, I didn't get that, please try again.";
        }

    };

    // // const reply = getReply(query);
    return getReply(query).then((res) => showReply(res.data));



    //used for debug
    // return JSON.stringify(query) + "\n" + JSON.stringify(reply) + "\n" + JSON.stringify(lst);
    // if (reply) {
    //     // return JSON.stringify(reply);
    //     const food = reply.foods[0];

    //     let reply_str = ""
    //     reply_str += food.serving_qty + " " + food.serving_unit + " of " + food.food_name + "\n";
    //     reply_str += "weight: " + food.serving_weight_grams + " g contain:\n";
    //     reply_str += "calories: " + food.nf_calories + " kJ\n";
    //     reply_str += "total fat: " + food.nf_total_fat + " g\n";
    //     reply_str += "saturated fat: " + food.nf_saturated_fat + " g\n";
    //     reply_str += "protein: " + food.nf_protein + " g\n";
    //     reply_str += "sugars: " + food.nf_sugars + " g\n";
    //     reply_str += "total carbohydrate: " + food.nf_total_carbohydrate + " g\n";
    //     reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
    //     reply_str += "cholesterol: " + food.nf_cholesterol + " mg\n";
    //     reply_str += "sodium: " + food.nf_sodium + " mg\n";
    //     reply_str += "dietary fiber: " + food.nf_dietary_fiber + " g\n";
    //     reply_str += "Sodium: " + food.nf_sodium + " mg\n";
    //     reply_str += "Potassium: " + food.nf_potassium + " mg\n";
    //     reply_str += "Phosphorus: " + food.nf_p + " mg\n";
    //     // return reply_str;
    // }
    // else {
    //     return "Sorry, I didn't get that, please try again.";
    // }



};



export default getNutrition;