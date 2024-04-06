import React from 'react';
import {
  AfghanistanFormComponent,
  AlandIslandsFormComponent,
  AlbaniaFormComponent,
  AlgeriaFormComponent,
  AmericanSamoaFormComponent,
  AndorraFormComponent,
  AngolaFormComponent,
  AnguillaFormComponent,
  AntarcticaFormComponent,
  AntiguaBarbudaFormComponent,
  ArgentinaFormComponent,
  ArmeniaFormComponent,
  ArubaBarbudaFormComponent,
  ArubaFormComponent,
  AscensionIslandFormComponent,
  AustraliaFormComponent,
  AustriaFormComponent,
  AzerbaijanFormComponent,
  BahamasFormComponent,
  BahrainFormComponent,
  BangladeshFormComponent,
  BarbadosFormComponent,
  BelarusFormComponent,
  BelgiumFormComponent,
  KuwaitFormComponent,
  KyrgyzstanFormComponent,
  LaosFormComponent,
  LatviaFormComponent,
  LebanonFormComponent,
  LesothoFormComponent,
  LiberiaFormComponent,
  LibyaFormComponent,
  LiechtensteinFormComponent,
  LithuaniaFormComponent,
  LuxembourgFormComponent,
} from '../../resources/CountriesAddressComponents';

export default function CountryForm({ selectedCountry }) {

  console.log('*** selectedCountry', selectedCountry)

  const countryHandler = (selectedCountry) => {
    switch (Number(selectedCountry)) {
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
      case 17:
        return <AzerbaijanFormComponent />
        break;
      case 18:
        return <BahamasFormComponent />
        break;
      case 19:
        return <BahrainFormComponent />
        break;
      case 20:
        return <BangladeshFormComponent />
        break;
      case 21:
        return <BarbadosFormComponent />
        break;
      case 22:
        return <BelarusFormComponent />
        break;
      case 23:
        return <BelgiumFormComponent />
        break;





      case 125:
        return <KuwaitFormComponent />
        break;
      case 126:
        return <KyrgyzstanFormComponent />
        break;
      case 127:
        return <LaosFormComponent />
        break;
      case 128:
        return <LatviaFormComponent />
        break;
      case 129:
        return <LebanonFormComponent />
        break;
      case 130:
        return <LesothoFormComponent />
        break;
      case 131:
        return <LiberiaFormComponent />
        break;
      case 132:
        return <LibyaFormComponent />
        break;
      case 133:
        return <LiechtensteinFormComponent />
        break;
      case 134:
        return <LithuaniaFormComponent />
        break;
      case 135:
        return <LuxembourgFormComponent />
        break;
      default:
        return <div></div>
    }
  };

  return (<div>
    {countryHandler(selectedCountry)}
  </div>)
}
