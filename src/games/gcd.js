import getRandomInt, { getNod } from '../function.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const questionAndAnswer = () => {
  const randomNumOne = getRandomInt(100);
  const randomNumTwo = getRandomInt(100);

  const equation = `${randomNumOne} ${randomNumTwo}`;
  const correctAnswer = getNod(randomNumOne, randomNumTwo);
  const questionAndcorrectAnswer = {
    question: equation,
    correctAnswer,
  };
  return questionAndcorrectAnswer;
};

export default () => gameLogic(rules, questionAndAnswer);
