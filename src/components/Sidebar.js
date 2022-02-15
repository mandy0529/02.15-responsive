import React from "react";
import { useGlobalContext } from "../context/AppContext";
import { NavbarList } from "../utils/helper";
import { Link } from "react-router-dom";
import { SidebarContainer } from "../styles/sidebar";

const Sidebar = () => {
  const { isSidebar, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside className={`${isSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
        <ul className="links">
          {NavbarList.map((item) => {
            const { id, title, path } = item;
            return (
              <Link onClick={closeSidebar} to={path} key={id}>
                {title}
              </Link>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;
