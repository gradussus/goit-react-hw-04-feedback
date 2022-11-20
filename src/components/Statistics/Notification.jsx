import PropTypes from 'prop-types';
export const Notification = ({ text }) => <div>{text}</div>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
