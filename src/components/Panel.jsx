import PropTypes from 'prop-types';
import styles from './Panel.module.scss';

import { Task } from './Task';

export const Panel = (props) => {
  const { showCompleted, tasks, setTasks } = props;
  return (
    <div className={styles.panel} role="tabpanel">
      {tasks.map((task) => (
        <Task key={task.id} task={task} showCompleted={showCompleted} setTasks={setTasks} />
      ))}
    </div>
  );
};

Panel.propTypes = {
  showCompleted: PropTypes.bool,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
