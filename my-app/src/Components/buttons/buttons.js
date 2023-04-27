import React from "react";
// import { useHistory } from "react-router-dom";

const VarQuizButton = () => {
  // const history = useHistory();

  const handleClick = () => {
    // history.push("/quizPage");
  };

  return <button onClick={handleClick}>Go to Variables Quiz</button>;
};

export default VarQuizButton;






















// import React from "react";

// //create a button to take the user to the variables quiz page
// //create a button to take the user to the arrays quiz page
// //create a button to take the user to the functions quiz page

// const VarQuizButton = ({ history }) => {
//   const handleClick = () => {
//     history.push("/variables-quiz"); // Change this to the correct path for the variables quiz page
//   };

//   return <button onClick={handleClick}>Go to Variables Quiz</button>;
// };

// export default VarQuizButton;
