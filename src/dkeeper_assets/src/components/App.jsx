import React, {useEffect, useState} from "react";
import Notee from "./Notee"
import InputNote from "./InputNote";
import Heading from "./Header";
import Footing from "./Footer";
import { dkeeper } from "../../../declarations/dkeeper"


function App(){

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log("useEffect is triggered");
        fetchData();
    }, [])

    function addNote(itemsToAdd) {
        setItems((prevItems) => {
            dkeeper.addNote(itemsToAdd.title, itemsToAdd.content);
            return [itemsToAdd, ...prevItems];
        });
    }

    function deleteItems(id) {
        setItems((prevItems) => {
            dkeeper.removeNote(id);
            return prevItems.filter((item, index) => {
                return index != id
            });
        });
    }

    async function fetchData() {
        const notesArray = await dkeeper.readNote();
        setItems(notesArray);
    }

    return <div>
        <Heading />
        <InputNote 
            whenClicked={addNote}
        />
        {items.map((item, index) => {
            return <Notee 
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                toDelete={deleteItems}
            />
        })}
        <Footing />      
    </div>
}

export default App;