import React, {useState} from "react";

function InputNote(props) {

    const [note, setNote] = useState({
        "title": "",
        "content": ""
    });


    function handleChange(event) {
        const {name, value} = event.target;
        
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    function submitNote(event) {
        props.whenClicked(note);
        event.preventDefault();
        setNote({
            "title": "",
            "content": ""
        })
    }

    return (
        <div>
          <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
            <button onClick={submitNote}>Add</button>
          </form>
        </div>
      );
}

export default InputNote