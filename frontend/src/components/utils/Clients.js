import React, { useEffect } from "react";
import ClientsData from "../ClientsData";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/NoteState";

const Clients = () => {
  let navigate = useNavigate();
  const { notes, getNotes } = useGlobalContext();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {/* Display Client */}
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Index
                </th>
                <th className="px-4 py-2 bg-gray-200 border border-gray-400">
                  Names
                </th>
              </tr>
            </thead>
            <tbody>
              {notes?.map((note, index) => {
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <ClientsData index={index} note={note} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Clients;
