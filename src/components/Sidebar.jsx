import { Archive, House, Star, Trash } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const styles =
      "flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full";
    return isActive
      ? `text-slate-50 bg-indigo-800 ${styles}`
      : `hover:bg-indigo-800 hover:text-slate-50 ${styles}`;
  };

  return (
    <aside className="flex flex-col gap-3 border-r-2 border-gray-100 w-[150px] h-screen p-3">
      <NavLink className={getStyles} to="/">
        <House className="w-5 h-5" />
        <span>Home</span>
      </NavLink>

      <NavLink className={getStyles} to="/archive">
        <Archive className="w-5 h-5" />
        <span>Archive</span>
      </NavLink>

      <NavLink className={getStyles} to="/star">
        <Star className="w-5 h-5" />
        <span>Star</span>
      </NavLink>

      <NavLink className={getStyles} to="/trash">
        <Trash className="w-5 h-5" />
        <span>Trash</span>
      </NavLink>
    </aside>
  );
};
