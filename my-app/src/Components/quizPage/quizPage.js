// This is where we pull the quiz data from the json file.
// TO DO - add the 'next button' function
// the next button will take us to the next question in the quiz data.
// once all five questions have been answered, a results button will appear
// once we click on the results button a different div will be rendered which shows the results of the quiz
// MVP - display answer / alert correct or incorrect/show immediate result?

import React, { useState } from "react";
export default function Quiz(){
  

  const arraysQuizData = [
    
      
      {questionText: "How do you declare an empty array in JavaScript?",
      optionText: [
        {answerText: "let arr = []", isCorrect: true},
        {answerText: "let arr ={}", isCorrect: false},
        {answerText: "let arr = '' ", isCorrect: false},
        {answerText: "let arr = new Array()", isCorrect: false}
      ],
    },
    
      
      {questionText: "How do you access the third element of an array named 'myArray'?", 
      optionText: [
      {answerText: "myArray[3]", isCorrect: false},
      {answerText: "myArray(2)", isCorrect: false},
      {answerText: "myArray[2]", isCorrect: true},
      {answerText: "myArray.2", isCorrect: false}
      ],
    },

    {questionText: "Which method adds an element to the end of an array?",
     optionText: [
        {answerText: "push()", isCorrect: true},
        {answerText: "pop()", isCorrect: false},
        {answerText: "unshift()", isCorrect: false},
        {answerText: "shift()", isCorrect: false}
      ],
    },

      {questiontext: "Which method removes the last element of an array and returns it?",
      optionText: [
        {answerText: "push()", isCorrect: false},
        {answerText: "pop()", isCorrect: true},
        {answerText: "unshift()", isCorrect: false},
        {answerText: "shift()", isCorrect: false}
      ],
    },

    {questionText: "Consider the following code. What will be the output?",
      "codeSnippet": "const arr = [1, 2, 3, 4]; arr.splice(1, 2, 'a', 'b'); console.log(arr);",
      optionText: [
        {answerText: "[1, 2, 3, 4]", isCorrect: false},
        {answerText: "[1, 'a', 'b', 4]", isCorrect: true},
        {answerText: "[1, 2, 'a', 'b']", isCorrect: false},
        {answerText: "['a', 'b', 3, 4]", isCorrect: false} 
      ],
    }
  ]


  // console.log("number 2", quizData);

  return (
    <div>
      {/* <h2>{quizName}</h2> */}
    
      <p>THIS IS A TEST</p>
      <div className='app'>
   {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
   {false ? (
    <div className='score-section'>You scored 1 out of {arraysQuizData.length}</div>
   ) : (
    <>
     <div className='question-section'>
      <div className='question-count'>
       <span>Question 1</span>/{arraysQuizData.length}
      </div>
      <div className='question-text'>This is where the question text should go</div>
     </div>
     <div className='answer-section'>
      <button>Answer 1</button>
      <button>Answer 2</button>
      <button>Answer 3</button>
      <button>Answer 4</button>
     </div>
    </>
   )}
  </div>
</div>
  );
};


