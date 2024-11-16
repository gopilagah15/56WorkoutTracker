import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>Workout History</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.exercise}</td>
              <td>{workout.reps}</td>
              <td>{workout.weight}</td>
              <td>{workout.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutList;
