import React from "react";

export default function Contact() {
  return (
    <div>
      <form
        action=""
        className="border border-[#999797] rounded-2xl p-8 flex flex-col space-y-4 hover:bg-[#2c2c2c] transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <label className="font-semibold text-md">Name:</label>
          <input
            type="text"
            placeholder="Name ..."
            className="w-full px-4 py-2 outline-none border-[#999797] border rounded-md"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="font-semibold text-md">Email:</label>
          <input
            type="text"
            placeholder="Email ..."
            className="w-full px-4 py-2 outline-none border-[#999797] border rounded-md"
          />
        </div>
        {/* <label>Leave a message</label> */}
        <textarea
          placeholder="Leave a message ..."
          className="border border-[#999797] rounded-2xl p-4 h-32 outline-none resize-none"
        />
        <button
          type="button"
          className="bg-[#4D4D4D] rounded-2xl py-2 cursor-pointer hover:bg-[#4d4d4dc9] active:opacity-60 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}

//ai wrappers
