import React from 'react';

const Report = ({ workouts }) => {
  const totalWorkouts = workouts.length;
  const mostReps = workouts.reduce((max, workout) => (workout.reps > max ? workout.reps : max), 0);
  const mostWeightLifted = workouts.reduce(
    (max, workout) => (workout.reps * workout.weight > max ? workout.reps * workout.weight : max),
    0
  );

  return (
    <div>
      <h2>Workout Report</h2>
      <p>Total Workouts Logged: {totalWorkouts}</p>
      <p>Most Reps in a Workout: {mostReps}</p>
      <p>Most Weight Lifted in a Workout: {mostWeightLifted} lbs</p>
    </div>
  );
};

export default Report;
