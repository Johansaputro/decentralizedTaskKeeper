import Debug "mo:base/Debug";
import List "mo:base/List";

actor Dkeeper {

  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func addNote(titleText: Text, contentText: Text) {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes:= List.push(newNote, notes);
    // Debug.print(debug_show(notes));

  };

  public query func readNote(): async [Note] {
    return List.toArray(notes);
  };

  public func removeNote(id: Nat) {
    let takenNote = List.take(notes, id);
    let noteAfterDropped = List.drop(notes, id + 1);
    notes := List.append(takenNote, noteAfterDropped);
  }; 
}