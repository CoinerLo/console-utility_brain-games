import getRandomInt from '../function.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const randomNumOne = getRandomInt(100);
  const randomNumTwo = getRandomInt(100);
  const operatorsArray = ['+', '-', '*'];
  const sign = operatorsArray[getRandomInt(3)];

  const equation = `${randomNumOne} ${sign} ${randomNumTwo}`;
  const correctAnswer = eval(equation);
  const questionAndcorrectAnswer = {
    question: equation,
    correctAnswer,
  };
  return questionAndcorrectAnswer;
};

export default () => gameLogic(rules, questionAndAnswer);
