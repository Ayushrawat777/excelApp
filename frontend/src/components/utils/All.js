import React, { useEffect, useState } from "react";
import AllData from "../AllData";
import { useGlobalContext } from "../../context/NoteState";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const All = () => {
  const {
    notes,
    getNotes,
    interested,
    followUp,
    notInterested,
    wrongData,
    VM,
    notAnswered,
    confirmed,
    noResponse,
  } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const TABLE_HEAD1 = [
    "S NO.",
    "Name",
    "Title",
    "Category",
    "Company Name",
    "Work Website",
    "Cell Phone 1",
    "Cell Phone 2",
    "HQ Contact",
    "Email 2",
    "Email Company",
    "LinkedIn Url",
    "Location",
    "Status",
    "Remarks Melissa 1",
    "Remark 2",
    "Remarks For HQ Melissa",
    "Email",
    "Team Conversation",
    "Notes 3",
    "More Options",
  ];
  return (
    <>
      <div className=" p-2 mt-24">
        <button
          onClick={getNotes}
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          All
        </button>
        <button
          onClick={interested}
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Interested
        </button>
        <button
          onClick={followUp}
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Follow Up
        </button>
        <button
          onClick={notInterested}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Not Interested
        </button>
        <button
          onClick={wrongData}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Wrong Data
        </button>
        <button
          onClick={VM}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          VM
        </button>
        <button
          onClick={notAnswered}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Not Answered
        </button>
        <button
          onClick={confirmed}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Confirmed
        </button>
        <button
          onClick={noResponse}
          type="button"
          className="m-3 px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          No Response
        </button>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400">
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
              {notes?.map((note, index) => {
                return (
                  <AllData
                    index={index}
                    note={note}
                    togglePopup={togglePopup}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default All;