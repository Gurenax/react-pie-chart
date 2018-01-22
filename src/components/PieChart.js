import React from 'react'
import { Pie as PieChartGraph } from 'react-chartjs-2'

const PieChart = ({
  data,
  options
}) => {
  return <PieChartGraph data={data} options={options} />
}

export default PieChart