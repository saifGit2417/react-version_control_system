import React from "react";
import styles from './Profile.module.css'

const ProfileViewer = () => {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div style={person.theme} className={styles.containerDiv}>
      <h1>{person.name}'s Todos</h1>
      <img
        className={styles.image}
        src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
};

export default ProfileViewer;
