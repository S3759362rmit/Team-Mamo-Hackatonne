import React from "react";

import "./ChatOptions.css";

const ChatOptions = (props) => {
    const options = [
        { text: "Nutrition Facts", handler: props.actionProvider.handleNutrition, id: 1 },
        { text: "Recpie ", handler: () => { }, id: 2 },
        // { text: "APIs", handler: () => { }, id: 3 },
        // { text: "Security", handler: () => { }, id: 4 },
        // { text: "Interview prep", handler: () => { }, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default ChatOptions;