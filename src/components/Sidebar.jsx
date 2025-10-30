import { Archive, House, Star, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <>
      <aside className="bg-gray-800 w-1/4 h-screen">
        <ul>
          <NavLink to="/">
            <span>
              <House />
            </span>{" "}
            <span>Home</span>
          </NavLink>
          <NavLink to="/archive">
            <span>
              <Archive />
            </span>{" "}
            <span>Archive</span>
          </NavLink>
          <NavLink to="/star">
            <span>
              <Star />
            </span>{" "}
            <span>Star</span>
          </NavLink>
          <NavLink to="/trash">
            <span>
              <Trash />
            </span>{" "}
            <span>Trash</span>
          </NavLink>
        </ul>
      </aside>
    </>
  );
};
