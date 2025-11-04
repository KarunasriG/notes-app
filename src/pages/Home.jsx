import { PlusIcon } from "lucide-react";
import { Navbar } from "../components/Navbar.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { NotesCard } from "../components/NotesCard.jsx";
import { useNotes } from "../context/notesContext";

export const Home = () => {
  const { title, text, notes, archive, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({ type: "TITLE", payload: e.target.value });
  };

  const onTextChange = (e) => {
    notesDispatch({ type: "TEXT", payload: e.target.value });
  };

  const onIconClick = () => {
    if (title === "" || text === "") return;
    console.log(notes);
    notesDispatch({ type: "ADD_NOTE" });
    notesDispatch({ type: "CLEAR_INPUT" });
  };
  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  console.log(archive);

  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <div>
          <div>
            <div className="flex flex-col w-[300px] border-red-400 relative">
              <input
                value={title}
                onChange={onTitleChange}
                className="border border-neutral-800 rounded-b-md focus:outline-none border-b-0 p-1"
                type="text"
                placeholder="Enter the title"
              />

              <textarea
                value={text}
                onChange={onTextChange}
                className="border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1"
                placeholder="Enter the text"
              ></textarea>

              <button
                type="submit"
                onClick={onIconClick}
                className="absolute bottom-0 right-0 bg-indigo-800 p-2 rounded-full"
              >
                {" "}
                <PlusIcon />
              </button>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-6">
            {notes.map(({ id, title, text, isPinned }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            ))}
          </div>

          <div>
            {pinnedNotes?.length > 0 && <h3>Other Notes</h3>}
            <div className="flex flex-wrap gap-6">
              {otherNotes?.length > 0 &&
                otherNotes.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
