import React, { useState } from "react";
import { useGlobalContext } from "../context/NoteState";

const About = (props) => {
  const { addMail } = useGlobalContext();
  const { email } = props;
  const [mail, setMail] = useState({
    email: email,
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addMail(email, mail.message);
    setMail({
      email: "",
      message: "",
    });
  };

  const onChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
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
    
        <a
          onClick={openModal}
          
        >
        Message
        </a>

        {/* Modal */}
        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="relative bg-white rounded-md px-12 py-2 w-1/3">
                <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md shadow-md">
                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    &times;
                  </button>
                  <h2 className="text-2xl mb-4 font-semibold">Message</h2>
                  <form onSubmit={handleClick}>
                    <div className="mb-4">
                      <label
                        
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                      
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        value={mail.message}
                        onChange={onChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-32 resize-none"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      
    </>
  );
};

export default About;
