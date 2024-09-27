import React, { Component } from "react";
import { getInitialData } from "../utils/index";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Navbar from "./Navbar";

class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
  }

  addNote = (newNote) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  deleteNote = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  };

  toggleArchive = (id) => {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  };

  handleSearch = (searchTerm) => {
    this.setState({ search: searchTerm });
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const archivedNotes = filteredNotes.filter((note) => note.archived);
    const activeNotes = filteredNotes.filter((note) => !note.archived);

    return (
      <>
        <Navbar search={this.state.search} onSearch={this.handleSearch} />
        <div className="h-screen mx-14 p-4">
          <NoteForm addNote={this.addNote} />
          <NoteList
            title="Daftar Catatan"
            notes={activeNotes}
            deleteNote={this.deleteNote}
            toggleArchive={this.toggleArchive}
          />
          <NoteList
            title="Daftar Arsip"
            notes={archivedNotes}
            deleteNote={this.deleteNote}
            toggleArchive={this.toggleArchive}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
