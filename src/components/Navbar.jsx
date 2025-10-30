import logo from "../assets/images/logo.webp";

export const Navbar = () => {
  return (
    <header className="flex items-center gap-2 px-2 py-3 bg-gray-800">
      <img src={logo} alt="notes app logo" className="w-10 h-10 rounded-xl" />
      <h1 className="text-2xl font-bold">Notes App</h1>
    </header>
  );
};
