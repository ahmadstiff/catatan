import React, { Component } from "react";
import Swal from "sweetalert2";
import { showFormattedDate } from "../utils/index";

class NoteItem extends Component {
  handleDelete = () => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Catatan ini akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        this.props.deleteNote(this.props.note.id);
        Swal.fire("Dihapus!", "Catatan Anda telah dihapus.", "success");
      }
    });
  };

  render() {
    const { note, toggleArchive } = this.props;
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <h3 className="card-title">{note.title}</h3>
          <p>{note.body}</p>
          <p className="text-sm text-gray-500">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={this.handleDelete}
              className="btn btn-error btn-md"
            >
              Hapus
            </button>
            <button
              onClick={() => toggleArchive(note.id)}
              className="btn btn-warning btn-md"
            >
              {note.archived ? "Pindahkan" : "Arsipkan"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;
