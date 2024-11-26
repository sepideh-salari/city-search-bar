import React, { useState, useEffect } from "react";
import Input from "./Input";
import citiesData from "./cities.json";

import "./Global.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const matchedCity = citiesData.find((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );

    setSuggestion(matchedCity || "");
  };

  return (
    <div>
      <Input
        handleChange={handleChange}
        hint={suggestion || "Type a city..."}
      />
    </div>
  );
};

export default App;
