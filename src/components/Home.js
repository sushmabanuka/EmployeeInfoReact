import React from 'react'
import {  Link } from 'react-router-dom';
const Home = () => {
  return (
    


    <div class="jumbotron jumbotron-fluid bg-white">
    <div class="container text-sm-center p-t-3">
      <h1 class="display-2">Employee Information</h1>

      <div >
 <button type="button" class="btn btn-primary"><Link to="/Registration" className="nav-link text-white">
 Registration
             </Link></button>
 <button type="button" class="btn btn-primary m-4">  <Link to="/New_Login" className="nav-link text-white">
               Login
             </Link></button>
 
</div>
    </div>
  </div> 
  



  )
}

export default Home
