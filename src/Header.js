import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';

import { Link } from "react-router-dom"

function Header() {
  return (
  
    <div className="header">
      <Link className="link_img" to="/">
      <img src="https://m.media-amazon.com/images/G/01/SearchExcellence/QueryTriage/Signpost/as_signpost._FMpng_SY80_.png" alt="" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header-option">
          <span className="header-optionLineOne">hello guest </span>
          <span className="header-optionLineTwo">Sign in </span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">Orders </span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime </span>
        </div>
        
        <Link to="/checkout">
          <div className='header_basket'>
          <ShoppingCartIcon  />
          <span className="header_optionLineTwo  header_basketCount">0</span>
          </div>
          </Link>
    </div>
     </div>
  );
}

export default Header;
