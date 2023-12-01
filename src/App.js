import React, { useState, useMemo, useCallback } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', status: 'pending' },
    { id: 2, name: 'Task 2', status: 'completed' },
    { id: 3, name: 'Task 3', status: 'pending' },
    { id: 4, name: 'Task 4', status: 'in-progress' },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    console.log('Filtering tasks...');
    if (filter === 'all') {
      return tasks;
    } else {
      return tasks.filter(task => task.status === filter);
    }
  }, [tasks, filter]);

  const handleFilterChange = useCallback(
    selectedFilter => {
      setFilter(selectedFilter);
    }, []
  );

  return (
    <div>
      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
