import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Pie as PieChart } from 'react-chartjs-2'
import PieChart from './components/PieChart'

class App extends Component {
  render() {
    const chartData = {
      datasets: [{
        data: [
          20,
          10,
          30
        ],
        backgroundColor: [
          '#0090D3', // Green
          'red', // Red
          '#E2E2E2' // yellow
        ],
        label: 'Dataset 1',
      }],
      labels: [
        "OK",
        "Not OK",
        "Has not Responded",
      ]
    }

    const chartOptions = {
      responsive: true
      // legend: {
      //   position: 'bottom'
      // }
    }

    return (
      <div className="App">
        <h1>React Pie Chart</h1>
        <PieChart data={chartData} options={chartOptions} />
      </div>
    )
  }
}

export default App;
