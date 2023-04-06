/** 
 * The webpage base router. this has two route.
 * One is Introduce page, another is Help page.
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelpPage from "../pages/HelpPage";
import Introduce from "../pages/Introduce";
import Layout from "../pages/Layout";

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
