import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressChart = ({ workouts }) => {
  // Prepare the data for chart (sum weight lifted for each exercise over time)
  const exerciseData = workouts.reduce((acc, workout) => {
    const existing = acc.find((item) => item.exercise === workout.exercise);
    if (existing) {
      existing.totalWeight += workout.reps * workout.weight;
      existing.dates.push(workout.date);
    } else {
      acc.push({
        exercise: workout.exercise,
        totalWeight: workout.reps * workout.weight,
        dates: [workout.date],
      });
    }
    return acc;
  }, []);

  // Format data for the chart
  const chartData = exerciseData.map((data) => ({
    name: data.exercise,
    totalWeight: data.totalWeight,
    dates: data.dates.join(', '),
  }));

  return (
    <div>
      <h2>Progress Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalWeight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
