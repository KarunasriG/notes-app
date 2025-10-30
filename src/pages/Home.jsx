import { Navbar } from "./components/Navbar.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div>
          <h2>Home content</h2>
        </div>
      </main>
    </>
  );
}

export default Home;
