import React, {useState} from "react";
import Heading from "./Heading"
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea"

function App(){
    const [notes, setNotes] = useState([]);

    function handleClick(input){
        setNotes(prevValues => { return [...prevValues, input]});  
    };
    console.log(notes);

    function handleDelete(id){
    setNotes(prevValues => {
        return prevValues.filter((item, index) => {
            return index !== id
            });
        });
    };

    return (
    <div>
        <Heading />
        <CreateArea 
            addNote={handleClick}
        />
        {notes.map((note, index) => (
        <Note 
        key={index}
        id={index}
        title = {note.title}
        content = {note.content}
        deleteNote = {handleDelete}
        />))}
        
        <Footer />
    </div>
    );
};

export default App;