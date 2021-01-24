import React, {useState} from "react";

function CreateArea(props) {
    const [input, setInput] = useState({title: "", content: ""});

    function handleInput(event){
        const {name, value} = event.target;
        setInput({...input, [name]: value});
    }

  return (
    <div>
      <form>
        <input onChange={handleInput} autoComplete="off" name="title" placeholder="Title" value={input.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={input.content} />
        <button type="button" onClick={() => 
        {props.addNote(input); 
        setInput({title: "", content: ""}); 
        }}>
        <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
