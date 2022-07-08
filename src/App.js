import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetchHook from './hooks/useFetchHook';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const obj = {
    url: 'https://my-third-project-48c3a-default-rtdb.firebaseio.com/tasks.json'
  }

  const data = useFetchHook(obj).then(x => x);
  console.log(data)

  useEffect(() => {

  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={data}
      />
    </React.Fragment>
  );
}

export default App;
