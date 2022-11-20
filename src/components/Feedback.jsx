import React from 'react';
// import styled from 'styled-components';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const feedbackOptions = [`good`, `neutral`, `bad`];

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e =>
    this.setState(prevState => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });

  render() {
    return (
      <>
        <Section title={`Please leave feedback`}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics data={this.state}></Statistics>
        </Section>
      </>
    );
  }
}
