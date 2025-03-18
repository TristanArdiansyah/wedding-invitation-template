import React, { useState, useEffect } from "react";
import { supabase } from "../config/initsupabase";

const RSVPSection = ({ t }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+62");
  const [attendance, setAttendance] = useState("");
  const [guest, setGuest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [rsvp, setRSVP] = useState([]);

  const fetchRsvp = async () => {
    const { data: rsvp } = await supabase.from("rsvp").select("*");
    setRSVP(rsvp);
  };

  useEffect(() => {
    fetchRsvp();
  }, []);

  const handleAttendanceChange = (e) => {
    const value = e.target.value;
    setAttendance(value);
    if (value === "No") {
      setGuest("0");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !phoneNumber.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    const { error } = await supabase
      .from("rsvp")
      .insert({
        name: name,
        phone_number: phoneNumber,
        attendance,
        number_of_guest: guest,
      });

    if (!error) {
      setSubmitted(true);
    } else {
      console.error("Insert error:", error);
    }

  };

  return (
    <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
      <div className="container">
        <h2 className="mb-4 text-center">{t("rsvpTitle")}</h2>
        <form onSubmit={handleSubmit} className="card p-4 mb-5" style={{ borderRadius: 30 }}>
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
            <label htmlFor="phoneNumber" className="mb-1">
              <strong>{t("phone")}</strong>
            </label>
            <input
              className="form-control"
              id="phoneNumber"
              placeholder="+62"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={{ borderRadius: 10 }}
            />
          </div>
          {/* Attendance Button Group */}
          <div className="form-group mb-3">
            <label className="mb-1 d-block">
              <strong>{t("attendance")}</strong>
            </label>
            <div className="btn-group btn-group-toggle">
              <label className={`btn btn-outline-secondary ${attendance === "Yes" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  id="attendYes"
                  value="Yes"
                  autoComplete="off"
                  checked={attendance === "Yes"}
                  onChange={handleAttendanceChange}
                />{" "}
                {t("yes")}
              </label>
              <label className={`btn btn-outline-secondary ${attendance === "Maybe" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  id="attendMaybe"
                  value="Maybe"
                  autoComplete="off"
                  checked={attendance === "Maybe"}
                  onChange={handleAttendanceChange}
                />{" "}
                {t("maybe")}
              </label>
              <label className={`btn btn-outline-secondary ${attendance === "No" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="attendance"
                  id="attendNo"
                  value="No"
                  autoComplete="off"
                  checked={attendance === "No"}
                  onChange={handleAttendanceChange}
                />{" "}
                {t("no")}
              </label>
            </div>
          </div>
          {/* Guest Button Group shown only if attendance is not "No" */}
          {attendance !== "No" && (
            <div className="form-group mb-3">
              <label className="mb-1 d-block">
                <strong>{t("numberOfGuest")}</strong>
              </label>
              <div className="btn-group btn-group-toggle">
                <label className={`btn btn-outline-secondary   ${guest === "1" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="guest"
                    id="guestOne"
                    value="1"
                    autoComplete="off"
                    checked={guest === "1"}
                    onChange={(e) => setGuest(e.target.value)}
                  />{" "}
                  1
                </label>
                <label className={`btn btn-outline-secondary ${guest === "2" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="guest"
                    id="guestTwo"
                    value="2"
                    autoComplete="off"
                    checked={guest === "2"}
                    onChange={(e) => setGuest(e.target.value)}
                  />{" "}
                  2
                </label>
              </div>
            </div>
          )}
          {submitted ? (
            <button
              type="button"
              className="btn btn-success btn-lg"
              style={{ borderRadius: 10 }}
              disabled
            >
              {t("rsvpSuccess")}
            </button>
          ) : (
            <button type="submit" className="btn btn-info btn-lg" style={{ borderRadius: 10 }}>
              {t("sendNow")}
            </button>
          )}
        </form>
        <div className="container text-center">
          <img src="/assets/images/section-divider.png" alt="divider" className="pt-50" />
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
