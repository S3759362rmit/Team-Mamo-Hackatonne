import getNutrition from "./components/nutritionAPI";
import getRecipe from "./components/recipeAPI";
import MessageParser from "./MessageParser";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hello there, my friend.")
        this.updateChatbotState(greetingMessage)
    };

    handleNutrition = () => {
        const message = this.createChatBotMessage(
            "Awesome! Tell me the ingredients you want to know about, and I will show you their nutrient composition.",
            {
                // widget: "javascriptLinks",
            }
        );

        this.handleNutriQuery();
        MessageParser.setState("nutrition");
        this.updateChatbotState(message);
    };

    handleNutriQuery(query) {

        getNutrition(query).then(res => {
            this.updateChatbotState(this.createChatBotMessage(`Here are the nutrition facts for ${query}: \n` + res));
        });
    };


    handleRecipe = () => {

        const message = this.createChatBotMessage(
            "Great! Tell me the ingredients you have on hand, and I will show you recipes that you can make.");

        this.handleRecipeQuery("recipe");
        MessageParser.setState("recipe");
        this.updateChatbotState(message);
    };

    handleRecipeQuery(query) {
        if(query !== "recipe")
        {
            getRecipe(query).then(res => {
                this.updateChatbotState(this.createChatBotMessage(`Here are some recipes you can make with ${query}: \n` + res.join(" , ")));
            });
        }
    };

    handleReturn = () => {
        const message = this.createChatBotMessage(
            "Very well. What else can I do for you?",
            {
                widget: "ChatOptions",
            }
        );

        this.updateChatbotState(message);
    }


    updateChatbotState(message){

        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state.


        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider