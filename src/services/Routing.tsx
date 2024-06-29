import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Index from "../pages/Home/Index";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/*" element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
