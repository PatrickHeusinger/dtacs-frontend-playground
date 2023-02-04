import React, { FunctionComponent } from "react";
import { Box } from "@mantine/core";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const data = [
  {
    name: "Jan 2022",
    Lufthansa_Cargo: 4000,
    Lufthansa_Group: 2400,
    Lufthansa_Technik: 2400
  },
  {
    name: "Feb 2022",
    Lufthansa_Cargo: 3000,
    Lufthansa_Group: 1398,
    Lufthansa_Technik: 2210
  },
  {
    name: "Mar 2022",
    Lufthansa_Cargo: 2000,
    Lufthansa_Group: 2800,
    Lufthansa_Technik: 2290
  },
  {
    name: "Apr 2022",
    Lufthansa_Cargo: 2780,
    Lufthansa_Group: 3908,
    Lufthansa_Technik: 2000
  },
  {
    name: "Mai 2022",
    Lufthansa_Cargo: 1890,
    Lufthansa_Group: 2800,
    Lufthansa_Technik: 2181
  },
  {
    name: "Jun 2022",
    Lufthansa_Cargo: 2390,
    Lufthansa_Group: 3800,
    Lufthansa_Technik: 2500
  },
  {
    name: "Jul 2022",
    Lufthansa_Cargo: 3490,
    Lufthansa_Group: 4300,
    Lufthansa_Technik: 2100
  }
];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
      <g transform={`translate(${x},${y})`}>
        <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
  );
};

export default function Chart2() {
  return (
      <Box pt={160} sx={{display:'flex', justifyContent:'center' }}>
      <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Lufthansa_Group" stroke="#05164D" />
        <Line type="monotone" dataKey="Lufthansa_Cargo" stroke="#FFAD00">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="Lufthansa_Technik" stroke="#A9DADB" />
      </LineChart>
      </Box>
  );
}
