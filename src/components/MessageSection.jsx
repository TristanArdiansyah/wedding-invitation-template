import React, { useState } from "react";
import { useEffect } from 'react';
import { supabase } from '../config/initsupabase';

const MessageSection = ({ t }) => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("");

  const [wishes, setWishes] = useState([]);

  const fetchWishes = async () => {
    const { data: wishes } = await supabase
      .from('wishes')
      .select('*');
    setWishes(wishes);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !message.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const { error } = await supabase
      .from('wishes')
      .insert({ name: name, wish: message });


    // Add new message to the list
    const newMessage = {
      id: wishes.length + 1, // simple incremental ID
      name,
      wish: message,
    };

    setWishes([...wishes, newMessage]);

    // Clear form fields
    setName("");
    setMessage("");
    setAttendance("");



  };

  return (
    <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
      <div className="container">
        <h2 className="mb-4 text-center">{t("leaveMessage")}</h2>
        {/* The Form */}
        <form onSubmit={handleSubmit} className="card p-4 mb-5" style={{ borderRadius: 30 }} >
          <div className="form-group mb-3">
            <label htmlFor="name" className="mb-1">
              <strong>{t("name")}</strong>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={t("nameTextbox")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ borderRadius: 10 }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message" className="mb-1">
              <strong>{t("message")}</strong>
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder={t("messageTextbox")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ borderRadius: 10 }}
            />
          </div>
          <button type="submit" className="btn btn-info btn-lg" style={{ borderRadius: 10 }}>
            {t("sendNow")}
          </button>
        </form>

        {/* Messages List */}
        <div className="card p-4" style={{ borderRadius: 30 }}>
          {/* Show total message count (prepend '0' if < 10 for style) */}
          <span className="flex d-flex align-items-center">
            <img src="/assets/images/chats.svg" alt="" />
            <h4 className="ml-2">
              {wishes.length < 10 ? `0${wishes.length}` : wishes.length}{" "}
              {t("messages")}
            </h4>

          </span>

          {wishes.map((wish) => (
            <div
              key={wish.id}
              className="d-flex align-items-start mb-3"
              style={{ borderBottom: "1px solid #f1f1f1", paddingBottom: "10px" }}
            >
              {/* Right side: Name, Message, and Attendance badge */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "16px", color: "#d59a57" }}>{wish.name}</div>
                <div style={{ fontSize: "16px", color: "#747e88" }}>{wish.wish}</div>
              </div>
            </div>
          ))}

          {wishes.length === 0 && (
            <div className="text-center" style={{ color: "#747e88" }}>
              {t("noMessages")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
