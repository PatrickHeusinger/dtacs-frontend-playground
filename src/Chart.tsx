import React from "react";
import { Box } from "@mantine/core";


import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Jan 2022",
    uv: 4000,
    pv: 3400,
    amt: 2400
  },
  {
    name: "Feb 2022",
    uv: 4000,
    pv: 3398,
    amt: 3210
  },
  {
    name: "Mar 2022",
    uv: 4000,
    pv: 3800,
    amt: 4290
  },
  {
    name: "Apr 2022",
    uv: 3780,
    pv: 3908,
    amt: 3000
  },
  {
    name: "Mai 2022",
    uv: 4890,
    pv: 4800,
    amt: 4181
  },
  {
    name: "Jun 2022",
    uv: 3390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul 2022",
    uv: 5490,
    pv: 5300,
    amt: 3100
  }
];

export default function Chart() {
  return (
      <Box sx={{display:'flex', justifyContent:'center', padding: "120px" }}>
      <AreaChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#FFAD00"
            fill="#FFAD00"
        />
        <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#05164D"
            fill="#05164D"
        />
        <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#70C5C6"
            fill="#70C5C6"
        />
      </AreaChart>
      </Box>
  );
}


