import React, { useState } from "react";
import "./SubForm.css";

const HateLove = (props) => {
  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: "",
    },
  });

  const handleTxtArea = (e, pref) => {
    if (pref === "love") {
      setFormData({
        pref: {
          ...formData.prefs,
          love: e.target.value,
        },
      });
    } else if (pref === "hate") {
      setFormData({
        pref: {
          ...formData.prefs,
          hate: e.target.value,
        },
      });
    }
  };

  const preventFunc = (e) => {
    e.preventDefault();

    props.modifyIndex(6, formData);
  };

  const handleReturn = () => {
    props.modifyIndex(4);
  };

  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Parle-nous des aliments que tu préfères et que tu déteste !</p>
      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule:
      </label>
      <textarea id="prefered" onChange={(e) => handleTxtArea(e, "love")} />

      <label htmlFor="hated">
        Les aliments que tu ne supportes pas, séparés par une virgule:
      </label>
      <textarea id="hated" onChange={(e) => handleTxtArea(e, "hate")} />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Précèdent
        </button>
        <button>Suivant</button>
      </div>
    </form>
  );
};

export default HateLove;
