import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Text,
  LabelList,
} from "recharts";
import "./Admin.css";

const Admin = () => {
  const data = [
    { quarter: "Q1", sales: 432 },
    { quarter: "Q2", sales: 321 },
    { quarter: "Q3", sales: 626 },
    { quarter: "Q4", sales: 503 },
  ];

  return (
    <div
      className="linechartkd"
      style={{
        // width: "100%",
        height: 200,
      }}
    >
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <Tooltip
            wrapperStyle={{ backgroundColor: "blue", borderRadius: "5px" }}
            contentStyle={{ fontSize: 14, fontFamily: "Arial" }}
          />
          <Line
            type="linear" // Change from "monotone" to "linear"
            dataKey="sales"
            stroke="#3f51b5"
            strokeWidth={2}
            dot={false}
          >
            {/* Annotate points with quarter and sales */}
            <LabelList dataKey="sales" position="top" />
            <LabelList dataKey="quarter" position="bottom" />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Admin;
