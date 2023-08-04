import React, { useState } from 'react';

const Week = () => {
  
    const [currentDate, setCurrentDate] = useState(new Date());
  
    
    const handlePreviousWeek = () => {
      
      const previousWeek = new Date(currentDate);
      previousWeek.setDate(previousWeek.getDate() - 7);
      setCurrentDate(previousWeek);
    };
  
    
    const handleNextWeek = () => {
     
      const nextWeek = new Date(currentDate);
      nextWeek.setDate(nextWeek.getDate() + 7);
      setCurrentDate(nextWeek);
    };
  
    return (
      <div>
      
        <h1>Today's Date: {currentDate.toDateString()}</h1>
      
        <button onClick={handlePreviousWeek}>Previous Week</button>
        <button onClick={handleNextWeek}>Next Week</button>
       
        
      </div>
    );
  };
  
  export default Week;