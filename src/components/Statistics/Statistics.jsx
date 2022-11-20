import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Notification } from './Notification';

const List = styled.ul`
  list-style: none;
`;

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return total === 0 ? (
    <Notification text="There is no feedback" />
  ) : (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {percentage}%</li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
