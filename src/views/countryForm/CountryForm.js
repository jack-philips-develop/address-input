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
  BelizeFormComponent,
  BeninFormComponent,
  BermudaFormComponent,
  BhutanFormComponent,
  BoliviaFormComponent,
  BosniaHerzegovinaFormComponent,
  BotswanaFormComponent,
  BouvetIslandFormComponent,
  BrazilFormComponent,
  BritishIndianOceanTerritoryFormComponent,
  BritishVirginIslandsFormComponent,
  BruneiFormComponent,
  BulgariaFormComponent,
  BurkinaFasoFormComponent,
  BurundiFormComponent,
  CambodiaFormComponent,
  CameroonFormComponent,
  CanadaFormComponent,
  CanaryIslandsFormComponent,
  CapeVerdeFormComponent,
  CaribbeanNetherlandsFormComponent,
  CaymanIslandsFormComponent,
  CentralAfricanRepublicFormComponent,
  CeutaMelillaFormComponent,
  ChadFormComponent,
  ChileFormComponent,
  ChinaFormComponent,
  ChristmasIslandFormComponent,
  ClippertonIslandFormComponent,
  CocosIslandsFormComponent,
  ColombiaFormComponent,
  ComorosFormComponent,
  CongoBrazzavilleFormComponent,
  CongoKinshasaFormComponent,
  CookIslandsFormComponent,
  CostaRicaFormComponent,
  CroatiaFormComponent,
  CubaFormComponent,
  CuraçaoFormComponent,
  CyprusFormComponent,
  CzechiaFormComponent,
  CôteDIvoireFormComponent,
  DenmarkFormComponent,
  DiegoGarciaFormComponent,
  DjiboutiFormComponent,
  DominicaFormComponent,
  DominicanRepublicFormComponent,
  EcuadorFormComponent,
  EgyptFormComponent,
  ElSalvadorFormComponent,
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
      case 24:
        return <BelizeFormComponent/>
        break;
      case 25:
        return <BeninFormComponent/>
        break;
      case 26:
        return <BermudaFormComponent/>
        break;
      case 27:
        return <BhutanFormComponent/>
        break;
      case 28:
        return <BoliviaFormComponent/>
        break;
      case 29:
        return <BosniaHerzegovinaFormComponent/>
        break;
      case 30:
        return <BotswanaFormComponent/>
        break;
      case 31:
        return <BouvetIslandFormComponent/>
        break;
      case 32:
        return <BrazilFormComponent/>
        break;
      case 33:
        return <BritishIndianOceanTerritoryFormComponent/>
        break;
      case 34:
        return <BritishVirginIslandsFormComponent/>
        break;
      case 35:
        return <BruneiFormComponent/>
        break;
      case 36:
        return <BulgariaFormComponent/>
        break;
      case 37:
        return <BurkinaFasoFormComponent/>
        break;
      case 38:
        return <BurundiFormComponent/>
        break;
      case 39:
        return <CambodiaFormComponent/>
        break;
      case 40:
        return <CameroonFormComponent/>
        break;
      case 41:
        return <CanadaFormComponent/>
        break;
      case 42:
        return <CanaryIslandsFormComponent/>
        break;
      case 43:
        return <CapeVerdeFormComponent/>
        break;
      case 44:
        return <CaribbeanNetherlandsFormComponent/>
        break;
      case 45:
        return <CaymanIslandsFormComponent/>
        break;
      case 46:
        return <CentralAfricanRepublicFormComponent/>
        break;
      case 47:
        return <CeutaMelillaFormComponent/>
        break;
      case 48:
        return <ChadFormComponent/>
        break;
      case 49:
        return <ChileFormComponent/>
        break;
      case 50:
        return <ChinaFormComponent/>
        break;
      case 51:
        return <ChristmasIslandFormComponent/>
        break;
      case 52:
        return <ClippertonIslandFormComponent/>
        break;
      case 53:
        return <CocosIslandsFormComponent/>
        break;
      case 54:
        return <ColombiaFormComponent/>
        break;
      case 55:
        return <ComorosFormComponent/>
        break;
      case 56:
        return <CongoBrazzavilleFormComponent/>
        break;
      case 57:
        return <CongoKinshasaFormComponent/>
        break;
      case 58:
        return <CookIslandsFormComponent/>
        break;
      case 59:
        return <CostaRicaFormComponent/>
        break;
      case 60:
        return <CôteDIvoireFormComponent/>
        break;
      case 61:
        return <CroatiaFormComponent/>
        break;
      case 62:
        return <CubaFormComponent/>
        break;
      case 63:
        return <CuraçaoFormComponent/>
        break;
      case 64:
        return <CyprusFormComponent/>
        break;
      case 65:
        return <CzechiaFormComponent/>
        break;
      case 66:
        return <DenmarkFormComponent/>
        break;
      case 67:
        return <DiegoGarciaFormComponent/>
        break;
      case 68:
        return <DjiboutiFormComponent/>
        break;
      case 69:
        return <DominicaFormComponent/>
        break;
      case 70:
        return <DominicanRepublicFormComponent/>
        break;
      case 71:
        return <EcuadorFormComponent/>
        break;
      case 72:
        return <EgyptFormComponent/>
        break;
      case 73:
        return <ElSalvadorFormComponent/>
        break;
      default:
        return <div></div>
    }
  };

  return (<div>
    {countryHandler(selectedCountry)}
  </div>)
}
