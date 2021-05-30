import readlineSync from 'readline-sync';

export default (rules, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello , ${name}!`);
  console.log(rules);

  for (let i = 1; i < 4; i += 1) {
    const questionAndcorrectAnswer = questionAndAnswer();
    const { question } = questionAndcorrectAnswer;
    const { correctAnswer } = questionAndcorrectAnswer;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== `${correctAnswer}`) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
