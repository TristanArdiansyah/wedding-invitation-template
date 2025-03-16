import React, { useState } from "react";

const MessageSection = ( {t} ) => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !message.trim() || !attendance) {
      alert("Please fill in all fields!");
      return;
    }

    // Add new message to the list
    const newMessage = {
      id: messages.length + 1, // simple incremental ID
      name,
      message,
      attendance,
    };

    setMessages([...messages, newMessage]);

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
        <form onSubmit={handleSubmit} className="card p-4 mb-5" style={{ borderRadius: 30}} >
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
          <div className="form-group mb-3">
            <label className="mb-1 d-block">
              <strong>{t("attendance")}</strong>
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="attendance"
                id="attendYes"
                value="Yes"
                checked={attendance === "Yes"}
                onChange={(e) => setAttendance(e.target.value)}
              />
              <label className="form-check-label" htmlFor="attendYes">
              {t("yes")}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="attendance"
                id="attendMaybe"
                value="Maybe"
                checked={attendance === "Maybe"}
                onChange={(e) => setAttendance(e.target.value)}
              />
              <label className="form-check-label" htmlFor="attendMaybe">
              {t("maybe")}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="attendance"
                id="attendNo"
                value="No"
                checked={attendance === "No"}
                onChange={(e) => setAttendance(e.target.value)}
              />
              <label className="form-check-label" htmlFor="attendNo">
              {t("no")}
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-lg" style={{ borderRadius: 10 }}>
          {t("sendNow")}
          </button>
        </form>

        {/* Messages List */}
        <div className="card p-4" style={{ borderRadius: 30 }}>
          {/* Show total message count (prepend '0' if < 10 for style) */}
          <h4 className="mb-4">
            {messages.length < 10 ? `0${messages.length}` : messages.length}{" "}
            {t("messages")}
          </h4>

          {messages.map(({ id, name, message, attendance }) => (
            <div
              key={id}
              className="d-flex align-items-start mb-3"
              style={{ borderBottom: "1px solid #f1f1f1", paddingBottom: "10px" }}
            >
              {/* Left side: ID or bullet */}
              <div style={{ marginRight: "15px", color: "#d59a57" }}>
                <strong>{id < 10 ? `0${id}` : id}</strong>
              </div>
              {/* Right side: Name, Message, and Attendance badge */}
              <div style={{ flex: 1 }}>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <strong style={{ fontSize: "18px" }}>{name}</strong>
                  <span
                    className="badge"
                    style={{
                      backgroundColor:
                        attendance === "Yes"
                          ? "#5cb85c"
                          : attendance === "Maybe"
                          ? "#f0ad4e"
                          : "#d9534f",
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "5px 10px",
                      fontSize: "14px",
                    }}
                  >
                    {attendance}
                  </span>
                </div>
                <div style={{ fontSize: "16px", color: "#747e88" }}>{message}</div>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
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
