import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
