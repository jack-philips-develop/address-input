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
  MacaoSarChinaComponent,
  MadagascarFormComponent,
  MalawiFormComponent,
  MalaysiaFormComponent,
  MaldivesFormComponent,
  MaliFormComponent,
  MaltaFormComponent,
  MarshallIslandsFormComponent,
  MartiniqueFormComponent,
  MauritaniaFormComponent,
  MauritiusFormComponent,
  MayotteFormComponent,
  MexicoFormComponent,
  PalestinianTerritoriesFormComponent,
  PanamaFormComponent,
  PapuaNewGuineaFormComponent,
  ParaguayFormComponent,
  PeruFormComponent,
  PhilippinesFormComponent,
  PitcairnIslandsFormComponent,
  PolandFormComponent,
  PortugalFormComponent,
  PuertoRicoFormComponent,
  QatarFormComponent,
  RomaniaFormComponent,
  RussiaFormComponent,
  RwandaFormComponent,
  RéunionFormComponent,
  SamoaFormComponent,
  SanMarinoFormComponent,
  SaudiArabiaFormComponent,
  SenegalFormComponent,
  SerbiaFormComponent,
  SeychellesFormComponent,
  SierraLeoneFormComponent,
  SingaporeFormComponent,
  SintMaartenFormComponent,
  SlovakiaFormComponent,
  SloveniaFormComponent,
  SolomonIslandsFormComponent,
  SomaliaFormComponent,
  SouthAfricaFormComponent,
  SouthGeorgiaSouthSandwichIslandsFormComponent,
  SouthKoreaFormComponent,
  SouthSudanFormComponent,
  SpainFormComponent,
  SriLankaFormComponent,
  StBarthélemyFormComponent,
  StHelenaFormComponent,
  StKittsNevisFormComponent,
  StLuciaFormComponent,
  StMartinFormComponent,
  StPierreMiquelonFormComponent,
  StVincentGrenadinesFormComponent,
  SudanFormComponent,
  SurinameFormComponent,
  SvalbardJanMayenFormComponent,
  SwedenFormComponent,
  SwitzerlandFormComponent,
  SyriaFormComponent,
  SãoToméPríncipeFormComponent,
  TaiwanFormComponent,
  TajikistanFormComponent,
  TanzaniaFormComponent,
  ThailandFormComponent,
  TimorLesteFormComponent,
  TogoFormComponent,
  TokelauFormComponent,
  TongaFormComponent,
  TrinidadTobagoFormComponent,
  TristanDaCunhaFormComponent,
  TunisiaFormComponent,
  TurkeyFormComponent,
  TurkmenistanFormComponent,
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
      case 24:
        return <BelizeFormComponent />
        break;
      case 25:
        return <BeninFormComponent />
        break;
      case 26:
        return <BermudaFormComponent />
        break;
      case 27:
        return <BhutanFormComponent />
        break;
      case 28:
        return <BoliviaFormComponent />
        break;
      case 29:
        return <BosniaHerzegovinaFormComponent />
        break;
      case 30:
        return <BotswanaFormComponent />
        break;
      case 31:
        return <BouvetIslandFormComponent />
        break;
      case 32:
        return <BrazilFormComponent />
        break;
      case 33:
        return <BritishIndianOceanTerritoryFormComponent />
        break;
      case 34:
        return <BritishVirginIslandsFormComponent />
        break;
      case 35:
        return <BruneiFormComponent />
        break;
      case 36:
        return <BulgariaFormComponent />
        break;
      case 37:
        return <BurkinaFasoFormComponent />
        break;
      case 38:
        return <BurundiFormComponent />
        break;
      case 39:
        return <CambodiaFormComponent />
        break;
      case 40:
        return <CameroonFormComponent />
        break;
      case 41:
        return <CanadaFormComponent />
        break;
      case 42:
        return <CanaryIslandsFormComponent />
        break;
      case 43:
        return <CapeVerdeFormComponent />
        break;
      case 44:
        return <CaribbeanNetherlandsFormComponent />
        break;
      case 45:
        return <CaymanIslandsFormComponent />
        break;
      case 46:
        return <CentralAfricanRepublicFormComponent />
        break;
      case 47:
        return <CeutaMelillaFormComponent />
        break;
      case 48:
        return <ChadFormComponent />
        break;
      case 49:
        return <ChileFormComponent />
        break;
      case 50:
        return <ChinaFormComponent />
        break;
      case 51:
        return <ChristmasIslandFormComponent />
        break;
      case 52:
        return <ClippertonIslandFormComponent />
        break;
      case 53:
        return <CocosIslandsFormComponent />
        break;
      case 54:
        return <ColombiaFormComponent />
        break;
      case 55:
        return <ComorosFormComponent />
        break;
      case 56:
        return <CongoBrazzavilleFormComponent />
        break;
      case 57:
        return <CongoKinshasaFormComponent />
        break;
      case 58:
        return <CookIslandsFormComponent />
        break;
      case 59:
        return <CostaRicaFormComponent />
        break;
      case 60:
        return <CôteDIvoireFormComponent />
        break;
      case 61:
        return <CroatiaFormComponent />
        break;
      case 62:
        return <CubaFormComponent />
        break;
      case 63:
        return <CuraçaoFormComponent />
        break;
      case 64:
        return <CyprusFormComponent />
        break;
      case 65:
        return <CzechiaFormComponent />
        break;
      case 66:
        return <DenmarkFormComponent />
        break;
      case 67:
        return <DiegoGarciaFormComponent />
        break;
      case 68:
        return <DjiboutiFormComponent />
        break;
      case 69:
        return <DominicaFormComponent />
        break;
      case 70:
        return <DominicanRepublicFormComponent />
        break;
      case 71:
        return <EcuadorFormComponent />
        break;
      case 72:
        return <EgyptFormComponent />
        break;
      case 73:
        return <ElSalvadorFormComponent />
        return <BelgiumFormComponent/>
        break;


      case 125:
        return <KuwaitFormComponent/>
        break;
      case 126:
        return <KyrgyzstanFormComponent/>
        break;
      case 127:
        return <LaosFormComponent/>
        break;
      case 128:
        return <LatviaFormComponent/>
        break;
      case 129:
        return <LebanonFormComponent/>
        break;
      case 130:
        return <LesothoFormComponent/>
        break;
      case 131:
        return <LiberiaFormComponent/>
        break;
      case 132:
        return <LibyaFormComponent/>
        break;
      case 133:
        return <LiechtensteinFormComponent/>
        break;
      case 134:
        return <LithuaniaFormComponent/>
        break;
      case 135:
        return <LuxembourgFormComponent/>
        break;
      case 136:
        return <MacaoSarChinaComponent/>
        break;
      case 137:
        return <MadagascarFormComponent/>
        break;
      case 138:
        return <MalawiFormComponent/>
        break;
      case 139:
        return <MalaysiaFormComponent/>
        break;
      case 140:
        return <MaldivesFormComponent/>
        break;
      case 141:
        return <MaliFormComponent/>
        break;
      case 142:
        return <MaltaFormComponent/>
        break;
      case 143:
        return <MarshallIslandsFormComponent/>
        break;
      case 144:
        return <MartiniqueFormComponent/>
        break;
      case 145:
        return <MauritaniaFormComponent/>
        break;
      case 146:
        return <MauritiusFormComponent />
        break;
      case 147:
        return <MayotteFormComponent />
        break;
      case 148:
        return <MexicoFormComponent />
        break;

      // 176 -> 236
      case 176:
        return <PalestinianTerritoriesFormComponent/>
        break;
      case 177:
        return <PanamaFormComponent/>
        break;
      case 178:
        return <PapuaNewGuineaFormComponent/>
        break;
      case 179:
        return <ParaguayFormComponent/>
        break;
      case 180:
        return <PeruFormComponent/>
        break;
      case 181:
        return <PhilippinesFormComponent/>
        break;
      case 182:
        return <PitcairnIslandsFormComponent/>
        break;
      case 183:
        return <PolandFormComponent/>
        break;
      case 184:
        return <PortugalFormComponent/>
        break;
      case 185:
        return <PuertoRicoFormComponent/>
        break;
        case 186:
        return <QatarFormComponent/>
        break;
      case 187:
        return <RéunionFormComponent/>
        break;
      case 188:
        return <RomaniaFormComponent/>
        break;
      case 189:
        return <RussiaFormComponent/>
        break;
      case 190:
        return <RwandaFormComponent/>
        break;
      case 191:
        return <SamoaFormComponent/>
        break;
      case 192:
        return <SanMarinoFormComponent/>
        break;
      case 193:
        return <SãoToméPríncipeFormComponent/>
        break;
      case 194:
        return <SaudiArabiaFormComponent/>
        break;
      case 195:
        return <SenegalFormComponent/>
        break;
      case 196:
        return <SerbiaFormComponent/>
        break;
      case 197:
        return <SeychellesFormComponent/>
        break;
      case 198:
        return <SierraLeoneFormComponent/>
        break;
      case 199:
        return <SingaporeFormComponent/>
        break;
      case 200:
        return <SintMaartenFormComponent/>
        break;
      case 201:
        return <SlovakiaFormComponent/>
        break;
      case 202:
        return <SloveniaFormComponent/>
        break;
      case 203:
        return <SolomonIslandsFormComponent/>
        break;
      case 204:
        return <SomaliaFormComponent/>
        break;
      case 205:
        return <SouthAfricaFormComponent/>
        break;
      case 206:
        return <SouthGeorgiaSouthSandwichIslandsFormComponent/>
        break;
      case 207:
        return <SouthKoreaFormComponent/>
        break;
      case 208:
        return <SouthSudanFormComponent/>
        break;
      case 209:
        return <SpainFormComponent/>
        break;
      case 210:
        return <SriLankaFormComponent/>
        break;
      case 211:
        return <StBarthélemyFormComponent/>
        break;
      case 212:
        return <StHelenaFormComponent/>
        break;
      case 213:
        return <StKittsNevisFormComponent/>
        break;
      case 214:
        return <StLuciaFormComponent/>
        break;
      case 215:
        return <StMartinFormComponent/>
        break;
      case 216:
        return <StPierreMiquelonFormComponent/>
        break;
      case 217:
        return <StVincentGrenadinesFormComponent/>
        break;
      case 218:
        return <SudanFormComponent/>
        break;
      case 219:
        return <SurinameFormComponent/>
        break;
      case 220:
        return <SvalbardJanMayenFormComponent/>
        break;
      case 221:
        return <SwedenFormComponent/>
        break;
      case 222:
        return <SwitzerlandFormComponent/>
        break;
      case 223:
        return <SyriaFormComponent/>
        break;
      case 224:
        return <TaiwanFormComponent/>
        break;
      case 225:
        return <TajikistanFormComponent/>
        break;
      case 226:
        return <TanzaniaFormComponent/>
        break;
      case 227:
        return <ThailandFormComponent/>
        break;
      case 228:
        return <TimorLesteFormComponent/>
        break;
      case 229:
        return <TogoFormComponent/>
        break;
      case 230:
        return <TokelauFormComponent/>
        break;
      case 231:
        return <TongaFormComponent/>
        break;
      case 232:
        return <TrinidadTobagoFormComponent/>
        break;
      case 233:
        return <TristanDaCunhaFormComponent/>
        break;
      case 234:
        return <TunisiaFormComponent/>
        break;
      case 235:
        return <TurkeyFormComponent/>
        break;
      case 236:
        return <TurkmenistanFormComponent/>
        break;
      default:
        return <div></div>
    }
  };

  return (<div>
    {countryHandler(selectedCountry)}
  </div>)
}
