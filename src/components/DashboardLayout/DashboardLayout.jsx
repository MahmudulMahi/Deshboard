import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'

const DashboardLayout = () => {
  return (
    <>
    {/* <DashboardNavbar /> */}
        <DashboardNavbar></DashboardNavbar>
    <section className="">
        <div className="grid grid-cols-1 md:grid-cols-5 ">
            <DashboardSidebar></DashboardSidebar>
            <div className=" col-span-4 p-5">
                <Outlet />
            </div>
        </div>
    </section>
</>
  );
};

export default DashboardLayout;