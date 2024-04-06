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
  MoldovaFormComponent,
  MonacoFormComponent,
  MongoliaFormComponent,
  MontenegroFormComponent,
  MontserratFormComponent,
  MoroccoFormComponent,
  MozambiqueFormComponent,
  MyanmarBurmaFormComponent,
  NamibiaFormComponent,
  NauruFormComponent,
  NepalFormComponent,
  NetherlandsFormComponent,
  NewCaledoniaFormComponent,
  NewZealandFormComponent,
  NicaraguaFormComponent,
  NigerFormComponent,
  NigeriaFormComponent,
  NiueFormComponent,
  NorfolkIslandFormComponent, NorthernMarianaIslandsFormComponent,
  NorthKoreaFormComponent, NorthMacedoniaFormComponent, NorwayFormComponent, OmanFormComponent,
} from '../../resources/CountriesAddressComponents';

export default function CountryForm({selectedCountry}) {

  console.log('*** selectedCountry', selectedCountry)

  const countryHandler = (selectedCountry) => {
    switch (Number(selectedCountry)) {
      case 0:
        return <div></div>
        break;
      case 1:
        return <AfghanistanFormComponent/>
        break;
      case 2:
        return <AlandIslandsFormComponent/>
        break;
      case 3:
        return <AlbaniaFormComponent/>
        break;
      case 4:
        return <AlgeriaFormComponent/>
        break;
      case 5:
        return <AmericanSamoaFormComponent/>
        break;
      case 6:
        return <AndorraFormComponent/>
        break;
      case 7:
        return <AngolaFormComponent/>
        break;
      case 8:
        return <AnguillaFormComponent/>
        break;
      case 9:
        return <AntarcticaFormComponent/>
        break;
      case 10:
        return <AntiguaBarbudaFormComponent/>
        break;
      case 11:
        return <ArgentinaFormComponent/>
        break;
      case 12:
        return <ArmeniaFormComponent/>
        break;
      case 13:
        return <ArubaFormComponent/>
        break;
      case 14:
        return <AscensionIslandFormComponent/>
        break;
      case 15:
        return <AustraliaFormComponent/>
        break;
      case 16:
        return <AustriaFormComponent/>
        break;
      case 17:
        return <AzerbaijanFormComponent/>
        break;
      case 18:
        return <BahamasFormComponent/>
        break;
      case 19:
        return <BahrainFormComponent/>
        break;
      case 20:
        return <BangladeshFormComponent/>
        break;
      case 21:
        return <BarbadosFormComponent/>
        break;
      case 22:
        return <BelarusFormComponent/>
        break;
      case 23:
        return <BelgiumFormComponent/>
        break;

//! developer : Javad Rahati =>
      case 150:
        return <MoldovaFormComponent/>
        break;
      case 151:
        return <MonacoFormComponent/>
        break;
      case 152:
        return <MongoliaFormComponent/>
        break;
      case 153:
        return <MontenegroFormComponent/>
        break;
      case 154:
        return <MontserratFormComponent/>
        break;
      case 155:
        return <MoroccoFormComponent/>
        break;
      case 156:
        return <MozambiqueFormComponent/>
        break;
      case 157:
        return <MyanmarBurmaFormComponent/>
        break;
      case 158:
        return <NamibiaFormComponent/>
        break;
      case 159:
        return <NauruFormComponent/>
        break;
      case 160:
        return <NepalFormComponent/>
        break;
      case 161:
        return <NetherlandsFormComponent/>
        break;
      case 162:
        return <NewCaledoniaFormComponent/>
        break;
      case 163:
        return <NewZealandFormComponent/>
        break;
      case 164:
        return <NicaraguaFormComponent/>
        break;
      case 165:
        return <NigerFormComponent/>
        break;
      case 166:
        return <NigeriaFormComponent/>
        break;
      case 167:
        return <NiueFormComponent/>
        break;
      case 168:
        return <NorfolkIslandFormComponent/>
        break;
      case 169:
        return <NorthKoreaFormComponent/>
        break;
      case 170:
        return <NorthMacedoniaFormComponent/>
        break;
      case 171:
        return <NorthernMarianaIslandsFormComponent/>
        break;
      case 172:
        return <NorwayFormComponent/>
        break;
      case 173:
        return <OmanFormComponent/>
        break;
//!  <= developer : Javad Rahati

      default:
        return <div></div>
    }
  };

  return (<div>
    {countryHandler(selectedCountry)}
  </div>)
}
