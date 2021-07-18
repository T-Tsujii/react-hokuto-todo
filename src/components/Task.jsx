import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import styles from './Task.module.scss';
import { globalAxios, errorHandling } from '../config/globalAxios';

export const Task = (props) => {
  const { task, showCompleted, tasks, setTasks } = props;
  const isHidden = task.isCompleted !== showCompleted;

  const toggleCompletedStatus = async (id) => {
    try {
      let updateTask = tasks.find((taskData) => taskData.id === id);
      const response = await globalAxios.patch(`/tasks/${id}`, { isCompleted: !updateTask.isCompleted });
      updateTask = response.data;

      const updateTasks = tasks.map((taskData) => {
        return taskData.id === id ? updateTask : taskData;
      });
      setTasks(updateTasks);
    } catch (error) {
      errorHandling(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await globalAxios.delete(`/tasks/${id}`);
      const updateTasks = tasks.filter((taskData) => taskData.id !== id);
      setTasks(updateTasks);
    } catch (error) {
      errorHandling(error);
    }
  };

  return (
    <div className={`${styles.task} ${isHidden && styles.hidden}`}>
      <div className={styles.task_body} onClick={() => toggleCompletedStatus(task.id)}>
        {task.body}
      </div>
      <div className={styles.task_delete} onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  tasks: PropTypes.array,
  showCompleted: PropTypes.bool,
  setTasks: PropTypes.func,
};
