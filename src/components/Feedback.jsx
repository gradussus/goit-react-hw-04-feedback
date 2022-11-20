import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const feedbackOptions = [`good`, `neutral`, `bad`];

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    if (e.target.name === 'good') {
      return setGood(good => good + 1);
    }
    if (e.target.name === 'neutral') {
      return setNeutral(neutral => neutral + 1);
    }
    if (e.target.name === 'bad') {
      return setBad(bad => bad + 1);
    }
  };

  const totalFeedbacks = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / totalFeedbacks()) * 100);
  };

  return (
    <>
      <Section title={`Please leave feedback`}>
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          bad={bad}
          good={good}
          neutral={neutral}
          total={totalFeedbacks()}
          percentage={positivePercentage()}
        ></Statistics>
      </Section>
    </>
  );
};
