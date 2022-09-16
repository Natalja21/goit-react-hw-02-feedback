import PropTypes from 'prop-types';
import styles from 'components/styles/Notification.module.css';

const Notification = ({ message }) => {
  return <p className={styles.subtitle}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
