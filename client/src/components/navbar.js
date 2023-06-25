import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Recipe app</Link>
      </div>

      
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "active" : ""}`} />
        <div className={`bar ${menuOpen ? "active" : ""}`} />
        <div className={`bar ${menuOpen ? "active" : ""}`} />
      </div>

      
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>

        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <button className="logoutbutton" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};
