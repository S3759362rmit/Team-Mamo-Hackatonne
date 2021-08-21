import getNutrition from "./components/nutritionAPI";
import getRecipe from "./components/recipeAPI";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }


    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
    };

    handleNutrition() {
        const message = this.createChatBotMessage(
            "Fantastic, now just tell me what food you ate, and I will show you its nutritional components:");

        this.updateChatbotState(message);

    };

    handleNutriQuery(query) {

        getNutrition(query).then(res => {
            this.updateChatbotState(this.createChatBotMessage(res));

        });
    };


    handleRecipe() {

        const message = this.createChatBotMessage(
            "Fantastic, now just tell me what food you ate, and I will show you its nutritional components:");

        this.updateChatbotState(message);
    };

    handleRecipeQuery(query) {
        getRecipe(query).then(res => {
            this.updateChatbotState(this.createChatBotMessage(res));
        });
    }

    handleReturn = () => {
        const message = this.createChatBotMessage(
            "Very well. What else can I do for you?",
            {
                widget: "ChatOptions",
            }
        );

        this.updateChatbotState(message);
    }


    updateChatbotState(message) {

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