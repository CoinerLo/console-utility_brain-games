import getRandomInt, { isPrime } from '../function.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questionAndAnswer = () => {
  const randomNum = getRandomInt(1000);

  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

  const equation = randomNum;

  const questionAndcorrectAnswer = {
    question: equation,
    correctAnswer,
  };
  return questionAndcorrectAnswer;
};
export default () => gameLogic(rules, questionAndAnswer);
