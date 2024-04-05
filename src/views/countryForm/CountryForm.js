import React from 'react'
import { AfghanistanFormComponent, AlandIslandsFormComponent } from '../../resources/CountriesAddressComponents';

export default function CountryForm({ selectedCountry }) {

  console.log('***selectedCountry', selectedCountry)

  const countryHandler = (selectedCountry) => {
    switch (selectedCountry) {
      case 0:
        return <div></div>
        break;
      case 1:
        return <AfghanistanFormComponent />
        break;
      case 2:
        return <AlandIslandsFormComponent />
        break;
      default:
        return <div></div>
    }
  };

  return (
    <div>
      {countryHandler(2)}
    </div>
  )
}
