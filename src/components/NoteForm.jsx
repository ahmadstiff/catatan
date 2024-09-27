import React, { Component } from "react";
import Button from "./Button";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50, // Batas maksimal karakter judul
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNote = () => {
    const newNote = {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    this.props.addNote(newNote);
    this.setState({ title: "", body: "" });
  };

  render() {
    const { title, body, maxTitleLength } = this.state;
    const titleRemaining = maxTitleLength - title.length; // Menghitung sisa karakter

    return (
      <div className="mb-4 mx-10">
        <p className="text-right mb-1 text-sm text-gray-500">
          Sisa karakter: {titleRemaining}
        </p>

        <input
          type="text"
          name="title"
          placeholder="Judul Catatan (Max 50 Karakter)"
          value={title}
          onChange={this.handleChange}
          maxLength={maxTitleLength}
          className="input input-bordered w-full mb-2"
        />
        <textarea
          name="body"
          placeholder="Isi Catatan"
          value={body}
          onChange={this.handleChange}
          className="textarea textarea-bordered w-full mb-2"
        ></textarea>
        <Button onClick={this.handleAddNote} text="Tambah Catatan" />
      </div>
    );
  }
}

export default NoteForm;
