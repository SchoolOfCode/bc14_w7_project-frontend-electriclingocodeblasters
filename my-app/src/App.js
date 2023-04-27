// App.js

import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import variablesQuizData from "./Data/variables_questions.json";
import arraysQuizData from "./Data/arrays_questions.json";
import functionsQuizData from "./Data/functions_questions.json";
import NavBar from "./Components/NavBar/NavBar";
import Quiz from "./Components/quizPage/quizPage";
import "./index.css";
import "./App.css";
import "./Components/NavBar/navBar.css";
import "./Components/quizPage/quizPage.css";
import "./Components/buttons/buttons.css";

function App() {
  const [quizData, setQuizData] = useState(variablesQuizData);
  const [quizName, setQuizName] = useState("Variables Quiz");

  const handleQuizData = (e) => {
    const quizName = e.target.value;
    setQuizName(quizName);
    if (quizName === "Variables Quiz") {
      setQuizData(variablesQuizData);
    } else if (quizName === "Arrays Quiz") {
      setQuizData(arraysQuizData);
    } else if (quizName === "Functions Quiz") {
      setQuizData(functionsQuizData);
    }
  };

  return (
    <>
      <header className="NavBar">
        <NavBar />
      </header>

      <body className="App">
        <div className="container">
          <h1 id="main-page-heading">JavaScript Quiz</h1>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <button value="Variables Quiz" onClick={handleQuizData}>
                Variables{" "}
              </button>
            </p>
          </div>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />{" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <button value="Arrays Quiz" onClick={handleQuizData}>
                Arrays{" "}
              </button>
            </p>
          </div>

          <div className="row-container">
            <img
              src="https://imgs.search.brave.com/at_I0l315xw_OtEmdg-juXwRE6Rv5mgsNdUNVS4Ye8Y/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/cUFGaVZUZnNWTHZy/QjRtVUNoNDhRSGFF/byZwaWQ9QXBp"
              alt=""
            />{" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <button value="Functions Quiz" onClick={handleQuizData}>
                function{" "}
              </button>
            </p>
          </div>

        </div>
      </body>

      <quizQuestions className= "Quiz">
       
          <Quiz quizData={quizData} quizName={quizName} />
  
      </quizQuestions>
    </>
  );
}

export default App;
