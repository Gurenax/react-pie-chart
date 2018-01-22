import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Pie as PieChart } from 'react-chartjs-2'
import PieChart from './components/PieChart'

class App extends Component {
  render() {
    const data = {
      datasets: [{
        data: [
          10,
          20,
          30,
          40,
          50,
        ],
        backgroundColor: [
          '#FF0000', // red
          '#FFA500', // orange
          '#FFFF00', // yellow
          '#008000', // green
          '#0000FF', // blue
        ],
        label: 'Dataset 1'
      }],
      labels: [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue"
      ]
    }

    const options = {
      responsive: true
    }

    return (
      <div className="App">
        <h1>React Pie Chart</h1>
        <PieChart data={data} options={options} />
      </div>
    );
  }
}

export default App;
