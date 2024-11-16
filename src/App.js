import React, { useState, useEffect } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import ProgressChart from './components/ProgressChart';
import Report from './components/Report';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from LocalStorage if available
  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (savedWorkouts) {
      setWorkouts(savedWorkouts);
    }
  }, []);

  // Save workouts to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [...prev, workout]);
  };

  return (
    <div>
      <h1>Workout Tracker</h1>
      <WorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
      <ProgressChart workouts={workouts} />
      <Report workouts={workouts} />
    </div>
  );
};

export default App;
