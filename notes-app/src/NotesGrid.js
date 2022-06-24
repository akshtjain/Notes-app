import Note from "./Note";
import Masonry from 'react-masonry-css'

const NotesGrid = ({notes, updateNoteData}) => {
    return (  
        <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {/* array of JSX items */}
            {notes.map(note => (
                <Note noteData={note} updateNoteData={updateNoteData} key={note.id}/>
            ))}
        </Masonry>
        // <div className="masonGrid flex-container-row">
        //     {notes.map(note => (
        //         <Note noteData={note} updateNoteData={updateNoteData} key={note.id}/>
        //     ))}
        // </div>
    );
}
 
export default NotesGrid;