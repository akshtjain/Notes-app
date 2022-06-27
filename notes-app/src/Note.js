import ColourButton from "./ColourButton";
import { useState } from "react";

const Note = ({noteData, updateNoteData}) => {

    const colourOptions = ['white' ,'pink', 'blue', 'red', 'aqua'];
    const [colour, setColour] = useState('white');

    const setBackgroundColour = (colour) =>{
        setColour(colour);
        togglePalet();
    }

    const togglePalet =() =>{
        console.log();
        document.getElementsByClassName(`note${noteData.id}`)[0].getElementsByClassName('palet')[0].classList.toggle('display--none');
        document.getElementsByClassName(`note${noteData.id}`)[0].getElementsByClassName('palet')[0].classList.toggle('flex-container-row');
    }

    
    const togglePin =() => {
        let newNoteData = {...noteData};
        newNoteData.isPinned = !noteData.isPinned;
        console.log(noteData);
        console.log(newNoteData);
        updateNoteData(noteData.id, newNoteData);
        // noteData.isPinned = isPinned;
        // updateNotes();
    }

    return (  
        <div className={`note note${noteData.id}`} style={{backgroundColor:colour}} >
            <div onClick ={togglePin} className="pinButton noteUtilityButton"></div>
            <h4>{noteData.title}</h4>
            <p>{noteData.description}</p>
            <div className="BgColour">
                <div onClick ={togglePalet}>
                    <ColourButton />
                </div>
                <div className="palet display--none">
                    {colourOptions.map(colourOption => (
                        <div className ="colourOption" style={{backgroundColor:colourOption}} onClick={() => setBackgroundColour(colourOption)} key={colourOption}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Note;