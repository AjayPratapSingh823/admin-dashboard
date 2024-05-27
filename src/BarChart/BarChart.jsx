import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import Loader from "../Loader/Loader";
import "./BarChart.css";

const data = [
  { name: "jun", value: 121 },
  { name: "july", value: 168 },
  { name: "Aug", value: 145 },
  { name: "Sept", value: 187 },
  { name: "Oct", value: 202 },
];

const BartChart = () => {
  return (
    <div className="bar">
      <div>
        <BarChart
          width={250}
          height={200}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Tooltip />
          <Legend />

          {/* Integrate LabelList */}
          <Bar dataKey="value" fill="blue">
            <LabelList dataKey="value" position="top" />
            {/* <LabelList dataKey="name" position="bottom" /> */}
          </Bar>
        </BarChart>
      </div>
      <div>
        <Loader />
      </div>
    </div>
  );
};

export default BartChart;
