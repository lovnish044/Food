import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/footer-bg.jpg"
const Home = () => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
            <div className="row">
          <div className="col-10 mx-auto">
           <div className="row">
           <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
           <h1>Enjoy your food with <strong className="brand-name">FoodOrder</strong></h1>
           <h2 className="my-3">
               We have best Chief 
           </h2>
           <div className="mt-3"   >
           <NavLink to="/service" className="btn-get-started">Get It out</NavLink>
           </div>
           </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
           <img src={web} className="img-fluid animated" alt="ww"></img>
           </div>
           
           </div>
           </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Home;
