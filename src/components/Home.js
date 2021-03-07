import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  //https://www.youtube.com/watch?v=pxWe-nlOSY4
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2020/img/Prime/XCM_Manual_ORIGIN_1259690_1329040_TR_tr_pv_launch_hero_banners_tr_tr_3347402_1500x600_1X_tr_TR._CB405452713_.jpg"
          alt="aws banner"
        />
        <div className="home_row">
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          rating={4}/>
          <Product/>
        </div>
        <div className="home_row">
          <Product/>
          <Product/>
          <Product/>
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          <Product/>
          {/* product */}
        </div>

      </div>
    </div>
  );
};

export default Home;
