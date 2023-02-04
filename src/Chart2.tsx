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
    LufthansaCargo: 4000,
    LufthansaGroup: 2400,
    LufthansaTechnik: 2400
  },
  {
    name: "Feb 2022",
    LufthansaCargo: 3000,
    LufthansaGroup: 1398,
    LufthansaTechnik: 2210
  },
  {
    name: "Mar 2022",
    LufthansaCargo: 2000,
    LufthansaGroup: 2800,
    LufthansaTechnik: 2290
  },
  {
    name: "Apr 2022",
    LufthansaCargo: 2780,
    LufthansaGroup: 3908,
    LufthansaTechnik: 2000
  },
  {
    name: "May 2022",
    LufthansaCargo: 1890,
    LufthansaGroup: 2800,
    LufthansaTechnik: 2181
  },
  {
    name: "Jun 2022",
    LufthansaCargo: 2390,
    LufthansaGroup: 3800,
    LufthansaTechnik: 2500
  },
  {
    name: "Jul 2022",
    LufthansaCargo: 3490,
    LufthansaGroup: 4300,
    LufthansaTechnik: 2100
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
        <Line type="monotone" dataKey="LufthansaGroup" stroke="#05164D" />
        <Line type="monotone" dataKey="LufthansaCargo" stroke="#FFAD00">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="LufthansaTechnik" stroke="#A9DADB" />
      </LineChart>
      </Box>
  );
}
