import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Request from "./pages/Request";
import MyIssue from "./pages/MyIssue";
import Admin from "./pages/Admin";
import NonAdmin from "./pages/NonAdmin";
import MoreDetails from "./pages/MoreDetails";
import AllocatedMoreDetails from "./pages/AllocatedMoreDeatils";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myissue" element={<MyIssue />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/more/:id" element={<MoreDetails />} />
        <Route path="/mytask" element={<NonAdmin />} />
        <Route path="/mytask/:id" element={<AllocatedMoreDetails />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
