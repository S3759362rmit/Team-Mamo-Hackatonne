class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        const greetWords = ["hello", "hi", "how are you", "good day"]
        if (greetWords.some(v => lowerCaseMessage.includes(v))) {
            this.actionProvider.greet()
        }
    }
}

export default MessageParser