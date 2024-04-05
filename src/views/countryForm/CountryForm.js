import React from 'react';
import { AfghanistanFormComponent, AlandIslandsFormComponent, AlbaniaFormComponent, AlgeriaFormComponent, AmericanSamoaFormComponent, AndorraFormComponent, AngolaFormComponent, AnguillaFormComponent, AntarcticaFormComponent, AntiguaBarbudaFormComponent, ArgentinaFormComponent, ArmeniaFormComponent, ArubaBarbudaFormComponent, ArubaFormComponent, AscensionIslandFormComponent, AustraliaFormComponent, AustriaFormComponent, } from '../../resources/CountriesAddressComponents';

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
      case 3:
        return <AlbaniaFormComponent />
        break;
      case 4:
        return <AlgeriaFormComponent />
        break;
      case 5:
        return <AmericanSamoaFormComponent />
        break;
      case 6:
        return <AndorraFormComponent />
        break;
      case 7:
        return <AngolaFormComponent />
        break;
      case 8:
        return <AnguillaFormComponent />
        break;
      case 9:
        return <AntarcticaFormComponent />
        break;
      case 10:
        return <AntiguaBarbudaFormComponent />
        break;
      case 11:
        return <ArgentinaFormComponent />
        break;
      case 12:
        return <ArmeniaFormComponent />
        break;
      case 13:
        return <ArubaFormComponent />
        break;
      case 14:
        return <AscensionIslandFormComponent />
        break;
      case 15:
        return <AustraliaFormComponent />
        break;
      case 16:
        return <AustriaFormComponent />
        break;
      default:
        return <div></div>
    }
  };

  return (
    <div>
      {countryHandler(16)}
    </div>
  )
}
