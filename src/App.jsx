import { useState } from 'react';

import styles from './App.module.scss';

import { Message } from './components/Message';
import { InputTask } from './components/InputTask';
import { Tabs } from './components/Tabs';
import { Panel } from './components/Panel';

const App = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      body: '掃除',
      isCompleted: false,
    },
    {
      id: 2,
      body: '整理整頓',
      isCompleted: true,
    },
    {
      id: 3,
      body: '洗濯',
      isCompleted: false,
    },
  ]);

  return (
    <main>
      <h1>世紀末Todo伝説</h1>
      <div className="todo-component">
        <Message></Message>
        <InputTask></InputTask>
        <div className={styles.tab_component}>
          <Tabs showCompleted={showCompleted} setShowCompleted={setShowCompleted}></Tabs>
          <Panel showCompleted={showCompleted} tasks={tasks} setTasks={setTasks}></Panel>
        </div>
      </div>
    </main>
  );
};

export default App;
