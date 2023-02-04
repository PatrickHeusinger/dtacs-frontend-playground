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
import { Box } from "@mantine/core";
import React, {FunctionComponent} from "react";
const series = [
  {
    name: "Lufthansa Group",
    stroke: "#05164D",
    data: [
      { category: "A", value: 1300 },
      { category: "B", value: 1400 },
      { category: "C", value: 1800 },
      { category: "D", value: 1900 },
      { category: "E", value: 1700 },

    ]
  },
  {
    name: "Lufthansa Cargo",
    stroke: "#FFAD00",
    data: [
      { category: "A", value: 2300 },
      { category: "B", value: 2100 },
      { category: "C", value: 1900 },
      { category: "D", value: 2300 },
      { category: "E", value: 2400 },

    ]
  },
  {
    name: "Lufthansa Technik",
    stroke: "#A9DADB",
    data: [
      { category: "A", value: 2600 },
      { category: "B", value: 2650 },
      { category: "C", value: 2300 },
      { category: "D", value: 2600 },
      { category: "E", value: 2400 },

    ]
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

export default function App() {
  return (
      <Box p={40} mt={120} sx={{display:'flex', justifyContent:'center', backgroundColor:'#E7E8ED' }}>
      <LineChart width={800} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />

        {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke={s.stroke} >
              <LabelList content={<CustomizedLabel />} />
            </Line>
        ))}
      </LineChart>
      </Box>
  );
}

