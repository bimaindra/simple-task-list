import React, { useState } from 'react';
import Card from './components/Card';
import Tasks from './components/Tasks';
import FormTask from './components/FormTask';
import Footer from './components/Footer';

function App() {
  // Exisiting Task
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Cuci mobil...',
      day: 'Apr 3th at 12:00am',
      reminder: false
    },
    {
      id: 2,
      text: 'Hubungi bank...',
      day: 'Jun 3th at 12:00am',
      reminder: true
    },
    {
      id: 3,
      text: 'Bayar listrik, air, internet...',
      day: 'Mar 13th at 15:00am',
      reminder: false
    },
    {
      id: 4,
      text: 'Menjemput mama...',
      day: 'Apr 3th at 12:00am',
      reminder: false
    },
    {
      id: 5,
      text: 'Mengambil barang...',
      day: 'Aug 3th at 12:00am',
      reminder: true
    }
  ]);

  // State ShowHide Form
  const [showHide, setShowHide] = useState(false);

  // Add Task
  const addTask = (task) => {
    // Generate new ID
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };

    // Insert new object
    setTasks([newTask, ...tasks]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <main className='App p-2 lg:p-0'>
      <div className='p-4 lg:p-8 border rounded-md container lg:mt-8 lg:mx-auto'>
        <Card
          title='Task List'
          btnText={showHide ? 'Cancel' : 'Add New'}
          onAdd={() => setShowHide(!showHide)}
        />
        {showHide && <FormTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'Yeay! You have no task!'
        )}
      </div>
      <Footer />
    </main>
  );
}

export default App;
