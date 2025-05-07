import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import DashboardHome from "./pages/dashboard/Dashboard_Home.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import { useDispatch } from "react-redux";
import { categoryAll } from "./redux/Category/CategorySlice.js";
import { getBrand } from "./redux/Brand/BrandSlice.js";
import ListSuperCategory from "./pages/add-edit/SuperCategory/ListSuperCategory.jsx";
import AddSuperCategory from "./pages/add-edit/SuperCategory/AddSuperCategory.jsx";
import "antd/dist/reset.css";
import ListCategory from "./pages/add-edit/Category/ListCategory.jsx";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryAll());
    dispatch(getBrand());
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="admin/super-category/add" element={<AddSuperCategory />} />
          <Route path="admin/super-category/list" element={<ListSuperCategory />} />
          <Route path="admin/category/list" element={<ListCategory />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
