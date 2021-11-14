import React, { useState } from 'react';
import AddNewService from '../../AddNewService/AddNewService';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import MyOrders from '../../MyOrders/MyOrders';
import "./AdminDashboard.css";

const AdminDashboard = () => {

    const [control, setControl] = useState("myOrders");

    return (
        <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="admin-area p-1">
                  <h1 className="mt-3 pt-3 pb-3">Dashboard</h1>
                  <hr className="mt-1 pt-1 text-white"/>
                  <div className="all-menu mt-5">

                    <li
                      onClick={() => setControl("myOrders")}
                      className="admin-menu p-2 fs-2 mt-3"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={() => setControl("MangeOrder")}
                      className="admin-menu p-2 fs-2 mt-3"
                    >
                      Manage All Orders
                    </li>

                    <li
                      onClick={() => setControl("addServices")}
                      className="admin-menu p-2 fs-2 mt-3"
                    >
                      Add A New Service
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center">
              {control === "myOrders" && <MyOrders></MyOrders>}
              {control === "MangeOrder" && <ManageAllOrders></ManageAllOrders>}
              {control === "addServices" && <AddNewService></AddNewService> }
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdminDashboard;