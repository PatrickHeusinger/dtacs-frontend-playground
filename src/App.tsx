import { MantineProvider } from "@mantine/core";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainFrame } from "./MainFrame";
import HomePage from "./HomePage";
import { Dashboard } from "./Dashboard";
import TablePage from "./TablePage";

let data = [
  {
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    reviews: {
      positive: 2223,
      negative: 259,
    },
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    reviews: {
      positive: 5677,
      negative: 1265,
    },
  },
  {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961,
    reviews: {
      positive: 3487,
      negative: 1845,
    },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    reviews: {
      positive: 8576,
      negative: 663,
    },
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
    reviews: {
      positive: 6631,
      negative: 993,
    },
  },
  {
    title: "A Scanner Darkly",
    author: "Philip K Dick",
    year: 1977,
    reviews: {
      positive: 8124,
      negative: 1847,
    },
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    reviews: {
      positive: 2223,
      negative: 259,
    },
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    reviews: {
      positive: 5677,
      negative: 1265,
    },
  },
  {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961,
    reviews: {
      positive: 3487,
      negative: 1845,
    },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    reviews: {
      positive: 8576,
      negative: 663,
    },
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
    reviews: {
      positive: 6631,
      negative: 993,
    },
  },
  {
    title: "A Scanner Darkly",
    author: "Philip K Dick",
    year: 1977,
    reviews: {
      positive: 8124,
      negative: 1847,
    },
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    reviews: {
      positive: 2223,
      negative: 259,
    },
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    year: 1818,
    reviews: {
      positive: 5677,
      negative: 1265,
    },
  },
  {
    title: "Solaris",
    author: "Stanislaw Lem",
    year: 1961,
    reviews: {
      positive: 3487,
      negative: 1845,
    },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    reviews: {
      positive: 8576,
      negative: 663,
    },
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
    reviews: {
      positive: 6631,
      negative: 993,
    },
  },
  {
    title: "A Scanner Darkly",
    author: "Philip K Dick",
    year: 1977,
    reviews: {
      positive: 8124,
      negative: 1847,
    },
  },
];

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFrame />}>
            <Route index element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/community" element={<TablePage data={data} />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
