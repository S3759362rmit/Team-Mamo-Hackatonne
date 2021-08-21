class MessageParser {
    static state = "initial";
    static setState = (newState) => {
        this.state = newState;
    }

    constructor(actionProvider) {
        this.actionProvider = actionProvider;

    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        const greetWords = ["hello", "hi", "how are you", "good day"];
        const quitWords = ["quit", "exit", "back"];



        if (this.constructor.state == "initial") {

            if (greetWords.some(v => lowerCaseMessage.includes(v))) {
                this.actionProvider.greet();
            }

            if (lowerCaseMessage.includes("nutrition")) {
                this.actionProvider.handleNutrition();
                this.constructor.setState("nutrition");

            }

            if (lowerCaseMessage.includes("recipe")) {
                this.actionProvider.handleRecipe();
                this.constructor.setState("recipe");
            }
        }

        if (this.constructor.state == "nutrition") {

            if (quitWords.some(v => lowerCaseMessage.includes(v))) {
                this.actionProvider.handleReturn();
                this.constructor.setState("initial");
            }
            else {
                this.actionProvider.handleNutriQuery(lowerCaseMessage);
            }



        }


    }
}

export default MessageParser