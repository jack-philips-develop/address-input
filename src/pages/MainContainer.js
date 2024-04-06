import React, { useState } from "react";

import countryList from "../resources/countryList";
import Select from "../components/select/Select";
import CountryForm from "../views/countryForm/CountryForm";

export default function MainContainer() {
  const [selectedOption, setSelectedOption] = useState(0);

  function convertCountriesToObjects(countryList) {
    return countryList.map((country, index) => ({
      id: index,
      name: country?.toLowerCase(),
    }));
  }

  const convertedList = convertCountriesToObjects(countryList);

  return (
    <div className="main-container row mx-0 d-flex align-items-center">
      <div className="col-12 col-lg-10 col-md-8 col-sm-12 shadow mx-3 my-5 px-4 fw-bold fs-6 gray-color border">
        {console.log("***convertedList", convertedList)}
        {console.log("💌 selected option: ", selectedOption)}
        <div className="m-3 mb-5">Address</div>
        <Select
          selectClassName="mb-4 col-6"
          label={"Country"}
          id={"form_country"}
          options={convertedList}
          selectedOption={(option) => setSelectedOption(option)}
        />
        <div className="row mx-0">
          <div className="col-12 col-lg-8 col-md-9 col-sm-12 px-0">
            <CountryForm selectedCountry={selectedOption} />
          </div>
        </div>
      </div>
    </div>
  );
}
