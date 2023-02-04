import { MantineProvider } from "@mantine/core";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainFrame } from "./MainFrame";
import Home from './Home';
import Chart from "./Chart";
import Chart2  from "./Chart2";
import Chart3 from "./Chart3";


export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route path="/" element={<Home />} />
            <Route path="/chart_one" element={<Chart />} />
            <Route path="/chart_two" element={<Chart2 />} />
            <Route path="/chart_three" element={<Chart3 />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
