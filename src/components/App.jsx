import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const feedbackOptions = [`good`, `neutral`, `bad`];

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
    if (totalFeedbacks() === 0) {
      return 'No feedbacks';
    }
    return Math.round((good / totalFeedbacks()) * 100) + '%';
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
        {totalFeedbacks !== 0 ? (
          <Statistics
            bad={bad}
            good={good}
            neutral={neutral}
            total={totalFeedbacks()}
            percentage={positivePercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
