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
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb 2022",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar 2022",
    uv: 2000,
    pv: 2800,
    amt: 2290
  },
  {
    name: "Apr 2022",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Mai 2022",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun 2022",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul 2022",
    uv: 3490,
    pv: 4300,
    amt: 2100
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
      <Box sx={{display:'flex', justifyContent:'center', padding: "120px" }}>
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
        <Line type="monotone" dataKey="uv" stroke="#FFAD00">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="pv" stroke="#05164D" />
      </LineChart>
      </Box>
  );
}
