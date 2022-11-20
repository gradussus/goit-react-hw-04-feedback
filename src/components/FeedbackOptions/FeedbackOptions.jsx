import PropTypes from 'prop-types';
import styled from 'styled-components';

const FB = styled.section``;
const FBButtons = styled.button`
  color: black;
`;
const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FB>
      <OptionsList>
        {options.map(option => (
          <li key={option}>
            <FBButtons onClick={onLeaveFeedback} name={option}>
              {option[0].toUpperCase() + option.slice(1)}
            </FBButtons>
          </li>
        ))}
      </OptionsList>
    </FB>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
