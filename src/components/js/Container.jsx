import PropTypes from 'prop-types';
import styles from 'components/styles/Container.module.css';

const Container = ({ children }) => (
  <div className={styles.feedbek__container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;