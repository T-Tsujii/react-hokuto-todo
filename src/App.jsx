import { useState, useEffect } from 'react';

import styles from './App.module.scss';
import { globalAxios, errorHandling } from './config/globalAxios';

import { Message } from './components/Message';
import { InputTask } from './components/InputTask';
import { Tabs } from './components/Tabs';
import { Panel } from './components/Panel';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const fetchInitialTasks = async () => {
    try {
      const response = await globalAxios.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      errorHandling(error);
    }
  };

  useEffect(() => {
    fetchInitialTasks();
  }, []);

  return (
    <main>
      <h1>世紀末Todo伝説</h1>
      <div className="todo-component">
        <Message></Message>
        <InputTask tasks={tasks} setTasks={setTasks}></InputTask>
        <div className={styles.tab_component}>
          <Tabs showCompleted={showCompleted} setShowCompleted={setShowCompleted}></Tabs>
          <Panel showCompleted={showCompleted} tasks={tasks} setTasks={setTasks}></Panel>
        </div>
      </div>
    </main>
  );
};

export default App;
