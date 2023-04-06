import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpPage from "./HelpPage";
import Introduce from "./Introduce";
import Layout from "./Layout";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Introduce />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
