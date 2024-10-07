import React from "react";


const ContactIcons = () => {
  return (
    <div className="h-full w-full">
      {/* Container for larger screens */}
      <div className="bg-white hidden md:flex flex-col z-[9999] rounded-xl p-1 fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          aria-label="phone"
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          phone
        </a>
        <a
          aria-label="message"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          message
        </a>
        <a
          aria-label="newmessage"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          message
        </a>
        <a
          aria-label="iosmail"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2"
        >
          mail
        </a>
      </div>

      {/* Chat Icon */}
      <div className="fixed z-[9999] hidden md:flex  right-4 bottom-4 md:right-8 md:bottom-8 transform hover:scale-110 transition duration-300">
        <div className="flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-4 md:p-5">
          chat
        </div>
      </div>

      {/* Container for smaller screens */}
      <div className="bg-white md:hidden flex flex-row justify-between items-center z-[9999] fixed bottom-0 w-full pb-4 p-2">
        <a
          aria-label="phone"
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
        </a>
        <a
          aria-label="message"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
        </a>

        <div className="relative flex justify-center items-center">
          <div className="absolute -top-14 flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-6 transform hover:scale-110 transition duration-300">
          </div>
        </div>
        <a
          aria-label="iosmail"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
        </a>
        <a
          aria-label="bsmessenger"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        >
        </a>
      </div>
    </div>
  );
};

export default ContactIcons;
