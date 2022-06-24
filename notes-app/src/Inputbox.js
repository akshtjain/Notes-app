import { useState } from "react";

const Inputbox = ({addNewNote}) => {

    const [id, setId] = useState(5);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEditing, setisEditing] = useState(false);
    const [titlePlaceholder, setTitlePlaceholder] = useState('Take a Note..');

    const handleSubmit = (e) => {
        e.preventDefault();
        setId(id+1);
        setTitle('');
        setDescription('');
        document.getElementById('textArea').classList.add('display--none');
        addNewNote({title:title, description:description, id:id});
    }


    const handleInputboxClick =() =>{
        setTitlePlaceholder('Title');
        document.getElementById('textArea').classList.remove('display--none');
        document.getElementById('noteSubmitButton').classList.remove('display--none');
        
    }

    return (  
        <div className="inputBox" onClick={handleInputboxClick}>
            <form onSubmit={handleSubmit}>
                <div className="inputBoxChild">
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange = {(e)=>setTitle(e.target.value)}
                        className = "inputBoxField inputBoxTitle"
                        placeholder= {titlePlaceholder}
                    />
                </div>
                <div id = "textArea" className="inputBoxChild display--none">
                    <textarea 
                        type="text"
                        required
                        value={description}
                        onChange = {(e)=>setDescription(e.target.value)}
                        className = "inputBoxField inputBoxDescription"
                        placeholder="Enter text here..."
                    />
                </div>
                
                <input id="noteSubmitButton" className="display--none" type="submit" value="Submit" />
            </form>
        </div>
        
    );
}
 
export default Inputbox;
