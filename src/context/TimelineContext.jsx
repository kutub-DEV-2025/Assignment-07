import { createContext, useContext, useState } from "react";

const TimelineContext = createContext(null);


export const useTimeline = () => {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error("useTimeline must be used inside TimelineProvider");
  }

  return context;
};

export default function TimelineProvider({ children }) {

  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState("All");

  
  const addEntry = (type, name) => {
    const entry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toISOString().split("T")[0],
    };

    setTimeline((prev) => [entry, ...prev]);
  };


  const value = {
    timeline,
    addEntry,
    filter,
    setFilter,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
}