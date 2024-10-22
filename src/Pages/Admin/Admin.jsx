import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import HeaderStats from "../../components/Header/HeaderStats";
import Dashboard from "../../components/Dashboard/Dashboard";

const Admin = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="bg-gray-200 h-screen">
        {/* <AdminNavbar /> */}
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Dashboard />
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
};

export default Admin;
