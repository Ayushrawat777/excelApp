import { createContext, useContext, useState } from "react";
const NoteContext = createContext();

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //GET all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a Note
  const addNote = async (
    name,
    title,
    category,
    company,
    workWebsite,
    cellPhone1,
    cellPhone2,
    hqContact,
    email2,
    emailCompany,
    linkedinUrl,
    location,
    status,
    remarkMel1,
    remark2,
    remarkMelHQ,
    email,
    teamConversation,
    notes3,
  ) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
    title,
    category,
    company,
    workWebsite,
    cellPhone1,
    cellPhone2,
    hqContact,
    email2,
    emailCompany,
    linkedinUrl,
    location,
    status,
    remarkMel1,
    remark2,
    remarkMelHQ,
    email,
    teamConversation,
    notes3,
      }),
    });
    const note = await response.json();
    setNotes([...notes, note]);
  };

  const addExcel = async (excel) => {
    const response = await fetch(`${host}/api/notes/excel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(excel),
    });
    await response.json();
    getNotes()
  };

  //Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
     await response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit Note
  const editNote = async (
    id,
    name,
    title,
    category,
    company,
    workWebsite,
    cellPhone1,
    cellPhone2,
    hqContact,
    email2,
    emailCompany,
    linkedinUrl,
    location,
    status,
    remarkMel1,
    remark2,
    remarkMelHQ,
    email,
    teamConversation,
    notes3,
  ) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        title,
        category,
        company,
        workWebsite,
        cellPhone1,
        cellPhone2,
        hqContact,
        email2,
        emailCompany,
        linkedinUrl,
        location,
        status,
        remarkMel1,
        remark2,
        remarkMelHQ,
        email,
        teamConversation,
        notes3,
      }),
    });
    await response.json();

    const newNotes = JSON.parse(JSON.stringify(notes));
    //LOGIC
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].name = name;
        newNotes[index].title = title;
        newNotes[index].category = category;
        newNotes[index].company = company;
        newNotes[index].workWebsite = workWebsite;
        newNotes[index].cellPhone1 = cellPhone1;
        newNotes[index].cellPhone2 = cellPhone2;
        newNotes[index].hqContact = hqContact;
        newNotes[index].email2 = email2;
        newNotes[index].emailCompany = emailCompany;
        newNotes[index].linkedinUrl = linkedinUrl;
        newNotes[index].location = location;
        newNotes[index].status = status;
        newNotes[index].remarkMel1 = remarkMel1;
        newNotes[index].remark2 = remark2;
        newNotes[index].remarkMelHQ = remarkMelHQ;
        newNotes[index].email = email;
        newNotes[index].teamConversation = teamConversation;
        newNotes[index].notes3 = notes3;
        break;
      } 
    }
    setNotes(newNotes);
    getNotes()
  };

  //send mail
  const addMail = async (email, message) => {
    //API call
    const response = await fetch(`${host}/api/notes/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
     await response.json();
  };
  //Filter Data
  const fetchNotesByStatus = async (status) => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    const newNotes = json.filter((note) => note.status === status);
    setNotes(newNotes);
   
  };
  const interested = () => fetchNotesByStatus("interested");
  const followUp = () => fetchNotesByStatus("follow_up");
  const notInterested = () => fetchNotesByStatus("not_interested");
  const wrongData = () => fetchNotesByStatus("wrong_data");
  const VM = () => fetchNotesByStatus("VM");
  const notAnswered = () => fetchNotesByStatus("not_answered");
  const confirmed = () => fetchNotesByStatus("confirmed");
  const noResponse = () => fetchNotesByStatus("no_response");
  return (
    <NoteContext.Provider
      value={{
        notes, setNotes,host,
        addExcel,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        addMail,
        followUp,
        interested,
        notInterested,noResponse,
        wrongData,
        VM,
        notAnswered,
        confirmed,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(NoteContext);
};

export { NoteState, useGlobalContext };
