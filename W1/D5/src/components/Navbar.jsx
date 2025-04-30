import React from "react";
import { Link } from "react-router";
import { Heart, ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount, wishlistCount }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        FakeStore
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <ShoppingCart count={cartCount} />
        </Link>
        <Link to="/wishlist">
          <Heart count={wishlistCount} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
