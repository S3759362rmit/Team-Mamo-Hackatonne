import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


import ChatOptions from "./components/ChatOptions";

const config = {
    botName: "Foory",
    initialMessages: [
        createChatBotMessage("Hi, I'm Foory! What would you like to know?", {
            widget: "ChatOptions",
        }),
    ],
    customComponents: {
        // Replaces the default bot avatar
        botAvatar: (props) => {return <div class="react-chatbot-kit-chat-bot-avatar-container">F</div>},
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "#1B99AF",
        },
        chatButton: {
            backgroundColor: "#1B99AF",
        },

    },
    widgets: [
        {
            widgetName: "ChatOptions",
            widgetFunc: (props) => <ChatOptions {...props} />,
        },
        // {
        //     widgetName: "javascriptLinks",
        //     widgetFunc: (props) => <LinkList {...props} />,
        //     props: {
        //         options: [
        //             {
        //                 text: "Introduction to JS",
        //                 url:
        //                     "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        //                 id: 1,
        //             },
        //             {
        //                 text: "Mozilla JS Guide",
        //                 url:
        //                     "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        //                 id: 2,
        //             },
        //             {
        //                 text: "Frontend Masters",
        //                 url: "https://frontendmasters.com",
        //                 id: 3,
        //             },
        //         ],
        //     },
        // },
    ],
};

export default config;
