import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Notification } from './Notification';

const List = styled.ul`
  list-style: none;
`;

export const Statistics = ({ data: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  return total === 0 ? (
    <Notification text="There is no feedback" />
  ) : (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {Math.round((good / total) * 100) || `0`}%</li>
    </List>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
};
