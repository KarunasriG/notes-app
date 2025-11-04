import { useNotes } from "../context/notesContext";
import { findNotesInArchive } from "../utils/findNotesInArchieve";
import { Pin, PinOff, Archive, Star, Trash } from "lucide-react";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive } = useNotes();

  const isNotesInArchive = findNotesInArchive(archive, id);

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-md" key={id}>
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {!isNotesInArchive ? (
          <button onClick={() => onPinClick(id)}>
            {isPinned ? <PinOff /> : <Pin />}
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            {isNotesInArchive ? <Archive /> : <Star />}
          </button>
          <button>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};
