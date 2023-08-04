import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getAllCountries, getTimezonesForCountry } from 'countries-and-timezones';

const Timezone = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('');

  
  const [countryOptions, setCountryOptions] = useState([]);
  const [timezoneOptions, setTimezoneOptions] = useState([]);


  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedTimezone('');
  };

  
  const handleTimezoneChange = (selectedOption) => {
    setSelectedTimezone(selectedOption.value);
  };


  
  const getCountryAndTimezoneOptions = () => {
    const countries = Object.entries(getAllCountries()).map(([id, country]) => ({
      value: id,
      label: country.name,
    }));
  
    setCountryOptions(countries);
  };
  
  useEffect(() => {
    getCountryAndTimezoneOptions();
  }, []);


  useEffect(() => {
    if (selectedCountry) {
      const timezones = getTimezonesForCountry(selectedCountry.value);
      const timezoneOptions = timezones.map((timezone) => ({
        value: timezone.name,
        label: timezone.name,
      }));
      setTimezoneOptions(timezoneOptions);
    }
  }, [selectedCountry]);

  return (
    <div>
      {/* Country Select */}
      <label>Select Country:</label>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryOptions}
        isSearchable
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
      />

      {/* Timezone Select */}
      <label>Select Timezone:</label>
      <Select
        value={selectedTimezone ? { value: selectedTimezone, label: selectedTimezone } : null}
        onChange={handleTimezoneChange}
        options={timezoneOptions}
        isSearchable
        isDisabled={!selectedCountry}
      />

      {/* Display the selected timezone */}
      {selectedTimezone && (
        <div>
          <h2>Selected Timezone:</h2>
          <p>{selectedTimezone}</p>
        </div>
      )}
    </div>
  );
};

export default Timezone;
