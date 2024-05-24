import React from "react";
import './Header.css'; // Importing the CSS file for styling

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="searchbar">
            <input type="text" name="searchbox" placeholder="Search..."/>
        </div>
        <div className="usericon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="icon" />
        </div>
    </header>
  )
}

export default Header