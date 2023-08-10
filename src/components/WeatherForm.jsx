import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./WeatherForm.css";

const WeatherForm = ({ onSubmit }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(location);
    setLocation('');
  };

  const findLocation = (event) =>{
    console.log(event);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>
          Weather App <WbSunnyIcon className="icon" />
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mid-body">
            <Input
              className="city-input"
              value={location}
              onChange={(event)=>setLocation(event.target.value)}
              required
              id="outlined-required"
              placeholder="Enter City Name"
              fullWidth
              autoComplete="off"
            />
          </div>

          <div className="lower-body">
            <Button className="submit-button" variant="contained" type="submit">
              Find Now
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button onClick={findLocation} className="location-button" variant="contained">
              Find Location
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeatherForm;
