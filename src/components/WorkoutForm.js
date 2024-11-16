import React, { useState } from 'react';

const WorkoutForm = ({ onAddWorkout }) => {
  const [workout, setWorkout] = useState({
    exercise: '',
    reps: 0,
    weight: 0,
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout.exercise && workout.reps && workout.weight && workout.date) {
      onAddWorkout(workout);
      setWorkout({ exercise: '', reps: 0, weight: 0, date: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log New Workout</h2>
      <input
        type="text"
        name="exercise"
        placeholder="Exercise Name"
        value={workout.exercise}
        onChange={handleChange}
      />
      <input
        type="number"
        name="reps"
        placeholder="Reps"
        value={workout.reps}
        onChange={handleChange}
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={workout.weight}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={workout.date}
        onChange={handleChange}
      />
      <button type="submit">Log Workout</button>
    </form>
  );
};

export default WorkoutForm;
