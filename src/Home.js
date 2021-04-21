import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="Home_image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg%201x,%20https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX3000_FMwebp_.jpg%202x"
          alt=""
        />

        <div className="home_row">
          <Product
            id="234234"
            title="the lean start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
          <Product
            id="234d234"
            title="the lean start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="2342334"
            title="the lean start up"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
          <Product
            id="2342344"
            title="the lean start up"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
          <Product
            id="2342324"
            title="the lean start up"
            price={29}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="2342340"
            title="the lean start up"
            price={22.9}
            image="https://images-na.ssl-images-amazon.com/images/I/91OLynGwZHL._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
