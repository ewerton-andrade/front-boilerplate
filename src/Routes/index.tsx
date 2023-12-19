import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "../Pages/Login";
import Test from "../Pages/Test";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes