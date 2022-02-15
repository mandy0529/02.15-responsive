import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../styles/navbar";
import { NavbarList } from "../utils/helper";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/AppContext";

function Navbar() {
  const { isSidebar, openSidebar } = useGlobalContext();

  return (
    <NavbarWrapper>
      {NavbarList.map((item) => {
        const { id, title, path } = item;
        return (
          <Link key={id} to={path}>
            {title}
          </Link>
        );
      })}
      <span>
        {isSidebar ? (
          null
        ) : (
          <FaBars className="bar-btn" onClick={openSidebar} />
        )}
      </span>
    </NavbarWrapper>
  );
}

export default Navbar;
