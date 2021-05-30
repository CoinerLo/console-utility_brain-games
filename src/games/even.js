import getRandomInt from '../function.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const randomNum = getRandomInt(100);
  let correctAnswer;
  if (randomNum % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  const equation = randomNum;

  const questionAndcorrectAnswer = {
    question: equation,
    correctAnswer,
  };
  return questionAndcorrectAnswer;
};
export default () => gameLogic(rules, questionAndAnswer);
