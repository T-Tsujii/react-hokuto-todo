import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './InputTask.module.scss';
import { globalAxios, errorHandling } from '../config/globalAxios';

export const InputTask = (props) => {
  const { tasks, setTasks } = props;
  const [taskBody, setTaskBody] = useState('');

  const addTask = async () => {
    try {
      const response = await globalAxios.post('/tasks', { body: taskBody });
      const { task, message } = response.data;
      console.log(message);
      // ここがおかしい
      setTasks([...tasks, task]);
      setTaskBody('');
    } catch (error) {
      errorHandling(error);
    }
  };

  return (
    <div className={styles.input_group}>
      <input
        className={styles.form_control}
        type="text"
        value={taskBody}
        onChange={(e) => {
          setTaskBody(e.target.value);
        }}
      />
      <button
        className={styles.input_group_append}
        disabled={taskBody === ''}
        onClick={() => {
          addTask();
        }}
      >
        登場
      </button>
    </div>
  );
};

InputTask.propTypes = {
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
