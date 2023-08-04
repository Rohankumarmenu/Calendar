

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

const Saving = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);

  const handleClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7));
  };

  const handleDateToggle = (date) => {
    setSelectedDates((prevSelectedDates) =>
      prevSelectedDates.includes(date)
        ? prevSelectedDates.filter((d) => d !== date)
        : [...prevSelectedDates, date]
    );
  };

  const saveData = () => {
    const formattedData = selectedDates.map((date, index) => ({
      Id: index + 101, 
      Name: "test", 
      Date: date.toISOString().slice(0, 10), 
      Time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), 
    }));

    // Save the formatted data to localStorage with a key
    localStorage.setItem("selected-dates", JSON.stringify(formattedData));

    
    alert("Data saved successfully!");
  };

  
  useEffect(() => {
    const savedData = localStorage.getItem("selected-dates");
    if (savedData) {
      console.log("Saved Data:", JSON.parse(savedData));
    }
  }, [selectedDates]);

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar value={date} onChange={setDate} onWeekClick={handleClick} />
      <ul>
        {selectedDates.map((date) => (
          <li key={date}>
            <label>
              <input
                type="checkbox"
                checked={true} 
                onChange={() => handleDateToggle(date)}
              />
              {date.toString()}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default Saving;




