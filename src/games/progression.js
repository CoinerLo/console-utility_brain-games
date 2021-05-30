import getRandomInt from '../function.js';
import gameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const randomNumContin = getRandomInt(50);
  const randomPosition = getRandomInt(10);
  const randomNumStart = getRandomInt(500);
  const series = [randomNumStart];
  let continuationNum = randomNumStart;
  for (let i = 1; i < 10; i += 1) {
    continuationNum += randomNumContin;
    series.push(continuationNum);
  }

  const correctAnswer = series[randomPosition];
  series[randomPosition] = '..';
  const equation = series.join(' ');
  const questionAndcorrectAnswer = {
    question: equation,
    correctAnswer,
  };
  return questionAndcorrectAnswer;
};

export default () => gameLogic(rules, questionAndAnswer);
