import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from "../Pages/Login";
import Test from "../Pages/Test";
import { PrivateRoutes } from "./privateRoutes";
import PageTeste from "../Pages/PageTeste";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route element={<PrivateRoutes />}>
          <Route path="/test" element={<Test />}/>
          <Route path="/pageteste" element={<PageTeste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes