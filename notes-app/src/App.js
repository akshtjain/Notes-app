import './App.css';
import Inputbox from './Inputbox';
import NotesGrid from './NotesGrid';
import { useState } from 'react';

function App() {
  let all_notes = [];
  const [notes, setNotes] = useState([
    {title:'note 1', description:'yellow', id: 1, isPinned:false},
    {title:'note 2', description:'red', id: 2, isPinned:false},
    {title:'Note 3', description:'green', id: 3,isPinned:false },
    {title:'note 4', description:'pink', id: 4,isPinned:false }
  ]);

  const [pinnedNotes, setPinnedNotes] = useState([]);



  const addNewNote = (note) => {
    const newNotes = [...notes];
    note.isPinned = false;
    newNotes.unshift(note);
    setNotes(newNotes);
  }
  const updateNoteData = (noteId, updatedNote) => {
    let newNotes = [];

    notes.map(note => {
      const temp = {...note};
      newNotes.push(temp);
    });

    pinnedNotes.map(note => {
      const temp = {...note};
      newNotes.push(temp);
    })

    newNotes = newNotes.filter((note) => note.id !== noteId);
    newNotes.push(updatedNote);
    // setNotes(newNotes);
    updateNotes(newNotes)
  }
  const updateNotes = (newNotes) => {
    let newNormalNotes = [];
    let newPinnedNotes = [];
    newNormalNotes = newNotes.filter((note) => note.isPinned === false);
    newPinnedNotes = newNotes.filter((note) => note.isPinned === true);

    setNotes(newNormalNotes);
    setPinnedNotes(newPinnedNotes);
  }
  return (
    <div className="App">
      <h1> Notes</h1>
      <Inputbox addNewNote={addNewNote}/>

      <div className="notes">
        {pinnedNotes.length > 0 && <h3>Pinned Notes</h3>}
        <NotesGrid notes={pinnedNotes } updateNoteData={updateNoteData}/>
        {pinnedNotes.length > 0 && <h3>Other Notes</h3>}
        <NotesGrid notes={notes} updateNoteData={updateNoteData} />
        {/* {notes.map(note=> <Note name={note.name} />)} */}
      </div>
    </div>
  );
}

export default App;
