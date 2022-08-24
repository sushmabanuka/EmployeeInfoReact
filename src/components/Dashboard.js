import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
    
              
           
      <div className="text-center"><h3>Welcome to Dashboard <Link
                to="/Logout"
                className="nav-link  font-weight-bold"
              >
                Logout
              </Link></h3></div>
    </>
  );
};

export default Dashboard;
