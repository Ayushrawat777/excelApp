import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/NoteState";
import Message from "./Message";
import { PencilIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
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
const AllData = (props) => {
  const { editNote, getNotes } = useGlobalContext();
  const { note, index } = props;

  const {
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
  } = note;

  const [noted, setNote] = useState({
    id: note._id,
    ename: note.name,
    etitle: note.title,
    ecategory: note.category,
    ecompany: note.company,
    eworkWebsite: note.workWebsite,
    ecellPhone1: note.cellPhone1,
    ecellPhone2: note.cellPhone2,
    ehqContact: note.hqContact,
    eemail2: note.email2,
    eemailCompany: note.emailCompany,
    elinkedinUrl: note.linkedinUrl,
    elocation: note.location,
    estatus: note.status,
    eremarkMel1: note.remarkMel1,
    eremark2: note.remark2,
    eremarkMelHQ: note.remarkMelHQ,
    eemail: note.email,
    eteamConversation: note.teamConversation,
    enotes3: note.notes3,
  });

  const onChange = (e) => {
    setNote({ ...noted, [e.target.name]: e.target.value });
  };

  const handleClick = async(e) => {
    console.log("Updating the note...", note);
    editNote(
      noted.id,
      noted.ename,
      noted.etitle,
      noted.ecategory,
      noted.ecompany,
      noted.eworkWebsite,
      noted.ecellPhone1,
      noted.ecellPhone2,
      noted.ehqContact,
      noted.eemail2,
      noted.eemailCompany,
      noted.elinkedinUrl,
      noted.elocation,
      noted.estatus,
      noted.eremarkMel1,
      noted.eremark2,
      noted.eremarkMelHQ,
      noted.eemail,
      noted.eteamConversation,
      noted.enotes3
    );
  };
  const isLast = index === note.length - 1;
  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  return (
    <>
      <tr key={name}>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {index + 1}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {name}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {title}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {category}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {company}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {workWebsite}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {cellPhone1}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {cellPhone2}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {hqContact}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {email2}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {emailCompany}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {linkedinUrl}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {location}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {status}
            </Typography>
          
            <select
              type="text"
              name="estatus"
              onChange={onChange}
              value={noted}
              className="outline-none w-5"
            >
              <option> </option>
              <option value="interested">Interested</option>
              <option value="not_interested">Not Interested</option>
              <option value="follow_up">Follow Up</option>
              <option value="wrong_data">Wrong Data</option>
              <option value="VM">VM</option>
              <option value="not_answered">Not Answered</option>
              <option value="confirmed">Confirmed</option>
              <option value="no_response">No Response</option>
            </select>
           <button
              onClick={handleClick}
              type="button"
              className="bg-blue-500 text-white "
            >
              Done
            </button> 
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {remarkMel1}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {remark2}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {remarkMelHQ}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {email}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {teamConversation}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {notes3}
            </Typography>
          </div>
        </td>
      
      </tr>
    </>
  );
};

export default AllData;
