import React from "react";
import "./styles.css";

export default function App() {
  let [data, setData] = React.useState({
    name: "Elon",
    surname: "Musk",
    profession: "Billionare",
    isDisplayed: true
  });

  function togglePrivacy() {
    setData((prevData) => ({
      ...prevData,
      isDisplayed: !prevData.isDisplayed
    }));
  }

  let displayName = data.isDisplayed === true ? data.name : "******";
  let displaySurname = data.isDisplayed === true ? data.surname : "******";
  let displayProfession =
    data.isDisplayed === true ? data.profession : "******";
  let displayDisclaymer =
    data.isDisplayed === true
      ? ""
      : "This information is private, by clicking you allow to show it";

  return (
    <div className="App" onClick={togglePrivacy}>
      <p>{displayDisclaymer}</p>
      <h1>
        You can call me: {displayName} {displaySurname}
      </h1>
      <h2>And my profession is: {displayProfession}</h2>
    </div>
  );
}
