import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css';

function Header() {
  return (
  
      <div className="header">
        <img src="/bootcamp/camp/public/iconfinder__amazon.com_1156738.png" alt="" />
     
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
          <div className='header_basket'>
          <ShoppingCartIcon  />
          <span className="header_optionLineTwo  header_basketCount">0</span>
          </div>
    </div>
     </div>
  );
}

export default Header;
