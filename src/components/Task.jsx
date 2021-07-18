import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import styles from './Task.module.scss';

export const Task = (props) => {
  const { task, showCompleted, setTasks } = props;
  const isHidden = task.isCompleted !== showCompleted;
  return (
    <div className={`${styles.task} ${isHidden && styles.hidden}`}>
      <div className={styles.task_body}>{task.body}</div>
      <div className={styles.task_delete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  showCompleted: PropTypes.bool,
  setTasks: PropTypes.func,
};
