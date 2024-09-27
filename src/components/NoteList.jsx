import React, { Component } from "react";
import NoteItem from "./NoteItem";

class NoteList extends Component {
  render() {
    return (
      <div className="mb-6 mx-10">
        <h2 className="text-xl font-bold mb-2">{this.props.title}</h2>
        {this.props.notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {this.props.notes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                deleteNote={this.props.deleteNote}
                toggleArchive={this.props.toggleArchive}
              />
            ))}
          </div>
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteList;
