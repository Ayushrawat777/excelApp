import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/NoteState";
import Excel from "./Excel";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD1 = [
  "S NO.",
  "Name",
  "Title",
  "  Category",
  "Company Name",
  "  Work Website",
  "  Cell Phone 1",
  "  Cell Phone 2",
  " HQ Contact",
  " Email 2",
  "  Email Company",
  "  LinkedIn Url",
  "  Location",
  "  Status",
  " Remarks Melissa 1",
  " Remark 2",
  " Remarks For HQ Melissa",
  " Email",
  " Team Conversation",
  " Notes 3",
  " More Options",
];

const Notes = () => {
  let navigate = useNavigate();
  const { notes, setNotes, getNotes, editNote } = useGlobalContext();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const [note, setNote] = useState({
    ename: "",
    etitle: "",
    ecategory: "",
    ecompany: "",
    eworkWebsite: "",
    ecellPhone1: "",
    ecellPhone2: "",
    ehqContact: "",
    eemail2: "",
    eemailCompany: "",
    elinkedinUrl: "",
    elocation: "",
    estatus: "",
    eremarkMel1: "",
    eremark2: "",
    eremarkMelHQ: "",
    eemail: "",
    eteamConversation: "",
    enotes3: "",
  });

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      ename: currentNote.name,
      etitle: currentNote.title,
      ecategory: currentNote.category,
      ecompany: currentNote.company,
      eworkWebsite: currentNote.workWebsite,
      ecellPhone1: currentNote.cellPhone1,
      ecellPhone2: currentNote.cellPhone2,
      ehqContact: currentNote.hqContact,
      eemail2: currentNote.email2,
      eemailCompany: currentNote.emailCompany,
      elinkedinUrl: currentNote.linkedinUrl,
      elocation: currentNote.location,
      estatus: currentNote.status,
      eremarkMel1: currentNote.remarkMel1,
      eremark2: currentNote.remark2,
      eremarkMelHQ: currentNote.remarkMelHQ,
      eemail: currentNote.email,
      eteamConversation: currentNote.teamConversation,
      enotes3: currentNote.notes3,
    });
  };

  const handleClick = (e) => {
    console.log("Updating the note...", note);
    editNote(
      note.id,
      note.ename,
      note.etitle,
      note.ecategory,
      note.ecompany,
      note.eworkWebsite,
      note.ecellPhone1,
      note.ecellPhone2,
      note.ehqContact,
      note.eemail2,
      note.eemailCompany,
      note.elinkedinUrl,
      note.elocation,
      note.estatus,
      note.eremarkMel1,
      note.eremark2,
      note.eremarkMelHQ,
      note.eemail,
      note.eteamConversation,
      note.enotes3
    );
    setIsOpen(!isOpen);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newSearchUser = notes.filter((contact) =>
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(newSearchUser);
    setNotes(newSearchUser);
  };
  return (
    <>
      <div
        floated={false}
        shadow={false}
        className="rounded-none p-4"
      
      >
        <div className=" flex items-center justify-between gap-8">
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {/* Add Excel data */}
            <Excel />
            {/* Add single member */}
            <AddNote />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Input
              label="Search"
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Search Contact"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              icon={
                <MagnifyingGlassIcon
                  className="h-5 w-5"
                  onClick={handleSearchSubmit}
                />
              }
            />
          </div>
        </div>
      </div>

      <Card
        className="h-full w-full box"
        style={{ background: "rgb(229 231 235)" }}
      >
        <CardBody className="overflow-scroll p-0">
          <table className=" w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD1.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD1.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {notes.length === 0 ? (
                <p>display none</p>
              ) : (
                notes?.map((note, index) => {
                  return (
                    <NoteItem
                      index={index}
                      updateNote={updateNote}
                      note={note}
                      togglePopup={togglePopup}
                      onChange={onChange}
                    />
                  );
                })
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div>
        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="relative bg-white rounded-md px-12 py-2 w-1/3">
                <button
                  onClick={togglePopup}
                  className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  &times;
                </button>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="ename"
                      onChange={onChange}
                      value={note.ename}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="etitle"
                      onChange={onChange}
                      value={note.etitle}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="ecategory"
                      onChange={onChange}
                      value={note.ecategory}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="ecompany"
                      onChange={onChange}
                      value={note.ecompany}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      workWebsite
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="eworkWebsite"
                      onChange={onChange}
                      value={note.eworkWebsite}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Cell Phone 1
                    </label>

                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="ecellPhone1"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.ecellPhone1}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Cell Phone 2
                    </label>

                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="ecellPhone2"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.ecellPhone2}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      hqContact
                    </label>

                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="ehqContact"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.ehqContact}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      email2
                    </label>

                    <input
                      type="email"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="eemail2"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eemail2}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      emailCompany
                    </label>

                    <input
                      type="email"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      id="etitle"
                      name="eemailCompany"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eemailCompany}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      linkedIn Url
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="elinkedinUrl"
                      onChange={onChange}
                      value={note.elinkedinUrl}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      location
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="elocation"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.elocation}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>

                    <select
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      name="estatus"
                      onChange={onChange}
                      minLength={5}
                      required
                      id="role-select"
                    >
                      <option>Select One</option>
                      <option value="interested">Interested</option>
                      <option value="not_interested">Not Interested</option>
                      <option value="follow_up">Follow Up</option>
                      <option value="wrong_data">Wrong Data</option>
                      <option value="VM">VM</option>
                      <option value="not_answered">Not Answered</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="no_response">No Response</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Remark Melissa 1
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="eremarkMel1"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eremarkMel1}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Remark 2
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="eremark2"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eremark2}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Remark Melissa HQ
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="eremarkMelHQ"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eremarkMelHQ}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="eemail"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eemail}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Team Conversation
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="eteamConversation"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.eteamConversation}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Notes 3
                    </label>
                    <input
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      type="text"
                      id="etitle"
                      name="enotes3"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      value={note.enotes3}
                      minLength={5}
                      required
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Update Note
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Notes;
