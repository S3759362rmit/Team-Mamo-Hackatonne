import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import './App.css';
import { Navbar } from 'react-bootstrap';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function App() {
  // const [chatState, setChatState] = useState("initial");

  return (
    <div className="App">
      <header>
        <Navbar class="navbar navbar-fixed-top navbar-inverse">
          <ul class="nav navbar-nav navbar-right">
            <li class="logo"><img src="./AskFoory.png" height="60" weight="60"/></li>
            <li><a href="https://teammamoplotting.shinyapps.io/NutrientsBarchart/" target="_blank">Data Tables</a></li>
            <li><a href="https://rpubs.com/echan1912/foorybars" target="_blank">Data Plots</a></li>
          </ul>
        </Navbar>
      </header>

      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}
export default App;
