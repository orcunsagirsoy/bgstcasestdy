import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';

export default function CaseChart(props) {

    console.log(props.data)

    const data = {
        labels: props.data.map(el => el.date.slice(8,10)),
        datasets: [
          {
            label: "Sale Count",
            data: props.data.map(el => el.saleCount),
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,1)",
          },
          {
            label: "Quantity",
            data: props.data.map(el => el.quantity),
            fill: false,
            borderColor: "#742774",
            pointBackgroundColor: "#742774",
          },
          {
            label: "Equity",
            data: props.data.map(el => el.equity),
            fill: false,
            borderColor: "#244774",
            pointBackgroundColor: "#244774",
          }
        ]
      };


    return (
        <div>
            <Line
                data={data}
                options={{
                    title:{
                    display:true,
                    text:'BigData Case Chart',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'top'
                    },
                    scales: {
                        xAxes: [{
                          scaleLabel: {
                            display: true,
                            labelString: 'Days in 2019-07'
                          }
                        }]
                      }
                }}
                />
        </div>
    )
}
