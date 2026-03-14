import React from "react";

const Modal = ({ heading, onClose, children }) => {
  return (
    //BACKDROP
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* CONTAINER */}
      <div
        className="border-black bg-white text-black rounded-xl shadow-lg p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row justify-between my-2 py-2 border-b-black">
          <h1 className="py-2 text-lg font-bold"> {heading}</h1>
          <button
            className="hover:bg-red-500 hover:text-white hover:cursor-pointer border border-white rounded-lg p-2 font-bold"
            onClick={onClose}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <hr></hr>
        <div className="m-2 p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
