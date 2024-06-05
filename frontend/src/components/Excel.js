import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { useGlobalContext } from "../context/NoteState";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  UserPlusIcon,
  CloudArrowUpIcon,
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

const Excel = () => {
  const { addExcel, getNotes } = useGlobalContext();
  const [excel, setExcel] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setExcel(jsonData);
    setIsOpen(true);
  };
  const handleChange = async () => {
    addExcel(excel);
    ref.current.value = "";
    setIsOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <input
        id="files"
        className="hidden"
        ref={ref}
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFile}
      />

      <Button className="flex items-center gap-3" size="sm">
        <label htmlFor="files" className="contents">
          <CloudArrowUpIcon className="h-4 w-4" /> Excel file
        </label>
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
              <h2>Click on Button to Upload file</h2>
              <button
                className="px-4 py-2.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleChange}
              >
                upload file
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Excel;
