import React, { useState } from "react";
import { useGlobalContext } from "../context/NoteState";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  UserPlusIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
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

const AddNote = () => {
  const { addNote, notes } = useGlobalContext();
  const [note, setNote] = useState({
    name: "",
    title: "",
    category: "",
    company: "",
    workWebsite: "",
    cellPhone1: "",
    cellPhone2: "",
    hqContact: "",
    email2: "",
    emailCompany: "",
    linkedinUrl: "",
    location: "",
    status: "",
    remarkMel1: "",
    remark2: "",
    remarkMelHQ: "",
    email: "",
    teamConversation: "",
    notes3: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.name,
      note.title,
      note.category,
      note.company,
      note.workWebsite,
      note.cellPhone1,
      note.cellPhone2,
      note.hqContact,
      note.email2,
      note.emailCompany,
      note.linkedinUrl,
      note.location,
      note.status,
      note.remarkMel1,
      note.remark2,
      note.remarkMelHQ,
      note.email,
      note.teamConversation,
      note.notes3
    );
    setNote({
      name: "",
      title: "",
      category: "",
      company: "",
      workWebsite: "",
      cellPhone1: "",
      cellPhone2: "",
      hqContact: "",
      email2: "",
      emailCompany: "",
      linkedinUrl: "",
      location: "",
      status: "",
      remarkMel1: "",
      remark2: "",
      remarkMelHQ: "",
      email: "",
      teamConversation: "",
      notes3: "",
    });
    setIsOpen(false);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <Button
          className="flex items-center gap-3"
          size="sm"
          onClick={openModal}
        >
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
        </Button>
        {/* Modal */}
        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="relative bg-white rounded-md px-12 py-2 w-1/3">
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Add Note</h2>
                <form onSubmit={handleClick}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={note.name}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="title"
                      value={note.title}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="category"
                      value={note.category}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="company"
                      value={note.company}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      workWebsite
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="workWebsite"
                      value={note.workWebsite}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="cellPhone1"
                      value={note.cellPhone1}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number2
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="cellPhone2"
                      value={note.cellPhone2}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      hqContact
                    </label>
                    <input
                      type="number"
                      id="phoneNumber"
                      name="hqContact"
                      value={note.hqContact}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email2
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email2"
                      value={note.email2}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Company
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="emailCompany"
                      value={note.emailCompany}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      linkedIn Profile
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="linkedinUrl"
                      value={note.linkedinUrl}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="location"
                      value={note.location}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      name="status"
                      value={note.status}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                      id="role-select"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Remark Melissa 1
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="remarkMel1"
                      value={note.remarkMel1}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Remark 2
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="remark2"
                      value={note.remark2}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Remark Melissa HQ
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="remarkMelHQ"
                      value={note.remarkMelHQ}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={note.email}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Team Conversation
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="teamConversation"
                      value={note.teamConversation}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Notes 3
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="notes3"
                      value={note.notes3}
                      onChange={onChange}
                      className="mt-1 p-1 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddNote;
