import React from "react";

const ClientsData = (props) => {
  const { note, index } = props;
  return (
    
      <>
        <td className="px-4 py-2 border border-gray-400">{index+1}</td>
        <td className="px-4 py-2 border border-gray-400">{note.name}</td>
      
    </>
  );
};

export default ClientsData;
