"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    const result = await res.json();
    if (result.success) alert("Message sent!");
    else alert("Something went wrong.");
  };

  return (
    <div className="my-16">
      <form
        onSubmit={handleSubmit}
        className="border border-[#999797] rounded-2xl p-8 flex flex-col space-y-4 hover:bg-[#2c2c2c] transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <label className="font-semibold text-md">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name ..."
            className="w-full px-4 py-2 outline-none border-[#999797] border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="font-semibold text-md">Email:</label>
          <input
            name="email"
            type="text"
            placeholder="Email ..."
            className="w-full px-4 py-2 outline-none border-[#999797] border rounded-md"
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Leave a message ..."
          className="border border-[#999797] rounded-2xl p-4 h-32 outline-none resize-none"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-[#4D4D4D] rounded-2xl py-2 cursor-pointer hover:bg-[#4d4d4dc9] active:opacity-60 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
