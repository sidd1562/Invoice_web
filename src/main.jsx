import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main_Header from "./components/Header/Main_Header.jsx";
import About from "./page/About.jsx";
import Layout from "./Layout.jsx";
import Home from "./page/Home.jsx";
import Github, { githubinfoLoader } from "./components/Github.jsx/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/Invoice" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route
        loader={githubinfoLoader} //api call
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
