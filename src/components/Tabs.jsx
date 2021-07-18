import styles from './Tabs.module.scss';
import PropTypes from 'prop-types';

export const Tabs = (props) => {
  const { showCompleted, setShowCompleted } = props;

  return (
    <ul className={styles.list}>
      <li
        className={`${styles.list_item} ${!showCompleted && styles.selected}`}
        onClick={() => setShowCompleted(false)}
        role="tab"
      >
        敵
      </li>
      <li
        className={`${styles.list_item} ${showCompleted && styles.selected}`}
        onClick={() => setShowCompleted(true)}
        role="tab"
      >
        KO
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  showCompleted: PropTypes.bool,
  setShowCompleted: PropTypes.func,
};
