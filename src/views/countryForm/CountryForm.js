import React from "react";
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
  NorfolkIslandFormComponent,
  NorthernMarianaIslandsFormComponent,
  NorthKoreaFormComponent,
  NorthMacedoniaFormComponent,
  NorwayFormComponent,
  OmanFormComponent,
  TanzaniaFormComponent,
  ThailandFormComponent,
  TimorLesteComponent,
  TogoFormComponent,
  TokelauFormComponent,
  TongaFormComponent,
  TrinidadTobagoFormComponent,
  TristanDaCunhaFormComponent,
  TunisiaFormComponent,
  TurkeyFormComponent,
  TurkmenistanFormComponent,
  TurksCaicosIslandsFormComponent,
  TuvaluFormComponent,
  UgandaFormComponent,
  UkraineFormComponent,
  UnitedArabEmiratesFormComponent,
  UnitedKingdomFormComponent,
  UnitedStatesFormComponent,
  UruguayFormComponent,
  USOutlyingIslandsFormComponent,
  USVirginIslandsFormComponent,
  UzbekistanFormComponent,
  VanuatuFormComponent,
  VaticanCityFormComponent,
  VenezuelaFormComponent,
  VietnamFormComponent,
  WallisFutunaFormComponent,
  WesternSaharaFormComponent,
  YemenFormComponent,
  ZambiaFormComponent,
  ZimbabweFormComponent,
  EquatorialGuineaFormComponent,
  EritreaFormComponent,
  EstoniaFormComponent,
  EswatiniFormComponent,
  EthiopiaFormComponent,
  FalklandIslandsFormComponent,
  FaroeIslandsFormComponent,
  FijiFormComponent,
  FinlandFormComponent,
  FranceFormComponent,
  FrenchGuianaFormComponent,
  FrenchPolynesiaFormComponent,
  FrenchSouthernTerritoriesFormComponent,
  GabonFormComponent,
  GambiaFormComponent,
  GeorgiaFormComponent,
  GermanyFormComponent,
  GhanaFormComponent,
  GibraltarFormComponent,
  GreeceFormComponent,
  GreenlandFormComponent,
  GrenadaFormComponent,
  GuadeloupeFormComponent,
  GuamFormComponent,
  GuatemalaFormComponent,
  GuernseyFormComponent,
  GuineaBissauFormComponent,
  GuineaFormComponent,
  GuyanaFormComponent,
  HaitiFormComponent,
  HeardMcdonaldIslandsFormComponent,
  HondurasFormComponent,
  HongKongSarChinaFormComponent,
  HungaryFormComponent,
  IcelandFormComponent,
  IndiaFormComponent,
  IndonesiaFormComponent,
  IranFormComponent,
  IraqFormComponent,
  IrelandFormComponent,
  IsleOfManFormComponent,
  IsraelFormComponent,
  ItalyFormComponent,
  JamaicaFormComponent,
  JapanFormComponent,
  JerseyFormComponent,
  JordanFormComponent,
  KazakhstanFormComponent,
  KenyaFormComponent,
  KiribatiFormComponent,
  KosovoFormComponent,
} from "../../resources/CountriesAddressComponents";

export default function CountryForm({ selectedCountry }) {
  console.log("*** selectedCountry", selectedCountry);

  const countryHandler = (selectedCountry) => {
    switch (Number(selectedCountry)) {
      case 0:
        return <div></div>;
        break;
      case 1:
        return <AfghanistanFormComponent />;
        break;
      case 2:
        return <AlandIslandsFormComponent />;
        break;
      case 3:
        return <AlbaniaFormComponent />;
        break;
      case 4:
        return <AlgeriaFormComponent />;
        break;
      case 5:
        return <AmericanSamoaFormComponent />;
        break;
      case 6:
        return <AndorraFormComponent />;
        break;
      case 7:
        return <AngolaFormComponent />;
        break;
      case 8:
        return <AnguillaFormComponent />;
        break;
      case 9:
        return <AntarcticaFormComponent />;
        break;
      case 10:
        return <AntiguaBarbudaFormComponent />;
        break;
      case 11:
        return <ArgentinaFormComponent />;
        break;
      case 12:
        return <ArmeniaFormComponent />;
        break;
      case 13:
        return <ArubaFormComponent />;
        break;
      case 14:
        return <AscensionIslandFormComponent />;
        break;
      case 15:
        return <AustraliaFormComponent />;
        break;
      case 16:
        return <AustriaFormComponent />;
        break;
      case 17:
        return <AzerbaijanFormComponent />;
        break;
      case 18:
        return <BahamasFormComponent />;
        break;
      case 19:
        return <BahrainFormComponent />;
        break;
      case 20:
        return <BangladeshFormComponent />;
        break;
      case 21:
        return <BarbadosFormComponent />;
        break;
      case 22:
        return <BelarusFormComponent />;
        break;
      case 23:
        return <BelgiumFormComponent />;
        break;
      case 74:
        return <EquatorialGuineaFormComponent />;
      case 75:
        return <EritreaFormComponent />;
      case 76:
        return <EstoniaFormComponent />;
      case 77:
        return <EswatiniFormComponent />;
      case 78:
        return <EthiopiaFormComponent />;
      case 79:
        return <FalklandIslandsFormComponent />;
      case 80:
        return <FaroeIslandsFormComponent />;
      case 81:
        return <FijiFormComponent />;
      case 82:
        return <FinlandFormComponent />;
      case 83:
        return <FranceFormComponent />;
      case 84:
        return <FrenchGuianaFormComponent />;
      case 85:
        return <FrenchPolynesiaFormComponent />;
      case 86:
        return <FrenchSouthernTerritoriesFormComponent />;
      case 87:
        return <GabonFormComponent />;
      case 88:
        return <GambiaFormComponent />;
      case 89:
        return <GeorgiaFormComponent />;
      case 90:
        return <GermanyFormComponent />;
      case 91:
        return <GhanaFormComponent />;
      case 92:
        return <GibraltarFormComponent />;
      case 93:
        return <GreeceFormComponent />;
      case 94:
        return <GreenlandFormComponent />;
      case 95:
        return <GrenadaFormComponent />;
      case 96:
        return <GuadeloupeFormComponent />;
      case 97:
        return <GuamFormComponent />;
      case 98:
        return <GuatemalaFormComponent />;
      case 99:
        return <GuernseyFormComponent />;
      case 100:
        return <GuineaFormComponent />;
      case 101:
        return <GuineaBissauFormComponent />;
      case 102:
        return <GuyanaFormComponent />;
      case 103:
        return <HaitiFormComponent />;
      case 104:
        return <HeardMcdonaldIslandsFormComponent />;
      case 105:
        return <HondurasFormComponent />;
      case 106:
        return <HongKongSarChinaFormComponent />;
      case 107:
        return <HungaryFormComponent />;
      case 108:
        return <IcelandFormComponent />;
      case 109:
        return <IndiaFormComponent />;
      case 110:
        return <IndonesiaFormComponent />;
      case 111:
        return <IranFormComponent />;
      case 112:
        return <IraqFormComponent />;
      case 113:
        return <IrelandFormComponent />;
      case 114:
        return <IsleOfManFormComponent />;
      case 115:
        return <IsraelFormComponent />;
      case 116:
        return <ItalyFormComponent />;
      case 117:
        return <JamaicaFormComponent />;
      case 118:
        return <JapanFormComponent />;
      case 119:
        return <JerseyFormComponent />;
      case 120:
        return <JordanFormComponent />;
      case 121:
        return <KazakhstanFormComponent />;
      case 122:
        return <KenyaFormComponent />;
      case 123:
        return <KiribatiFormComponent />;
      case 124:
        return <KosovoFormComponent />;
      case 150:
        return <MoldovaFormComponent />;
        break;
      case 151:
        return <MonacoFormComponent />;
        break;
      case 152:
        return <MongoliaFormComponent />;
        break;
      case 153:
        return <MontenegroFormComponent />;
        break;
      case 154:
        return <MontserratFormComponent />;
        break;
      case 155:
        return <MoroccoFormComponent />;
        break;
      case 156:
        return <MozambiqueFormComponent />;
        break;
      case 157:
        return <MyanmarBurmaFormComponent />;
        break;
      case 158:
        return <NamibiaFormComponent />;
        break;
      case 159:
        return <NauruFormComponent />;
        break;
      case 160:
        return <NepalFormComponent />;
        break;
      case 161:
        return <NetherlandsFormComponent />;
        break;
      case 162:
        return <NewCaledoniaFormComponent />;
        break;
      case 163:
        return <NewZealandFormComponent />;
        break;
      case 164:
        return <NicaraguaFormComponent />;
        break;
      case 165:
        return <NigerFormComponent />;
        break;
      case 166:
        return <NigeriaFormComponent />;
        break;
      case 167:
        return <NiueFormComponent />;
        break;
      case 168:
        return <NorfolkIslandFormComponent />;
        break;
      case 169:
        return <NorthKoreaFormComponent />;
        break;
      case 170:
        return <NorthMacedoniaFormComponent />;
        break;
      case 171:
        return <NorthernMarianaIslandsFormComponent />;
        break;
      case 172:
        return <NorwayFormComponent />;
        break;
      case 173:
        return <OmanFormComponent />;
        break;

      case 226:
        return <TanzaniaFormComponent />;
        break;
      case 227:
        return <ThailandFormComponent />;
        break;
      case 228:
        return <TimorLesteComponent />;
        break;
      case 229:
        return <TogoFormComponent />;
        break;
      case 230:
        return <TokelauFormComponent />;
        break;
      case 231:
        return <TongaFormComponent />;
        break;
      case 232:
        return <TrinidadTobagoFormComponent />;
        break;
      case 233:
        return <TristanDaCunhaFormComponent />;
        break;
      case 234:
        return <TunisiaFormComponent />;
        break;
      case 235:
        return <TurkeyFormComponent />;
        break;
      case 236:
        return <TurkmenistanFormComponent />;
        break;
      case 237:
        return <TurksCaicosIslandsFormComponent />;
        break;
      case 238:
        return <TuvaluFormComponent />;
        break;
      case 239:
        return <USOutlyingIslandsFormComponent />;
        break;
      case 240:
        return <USVirginIslandsFormComponent />;
        break;
      case 241:
        return <UgandaFormComponent />;
        break;
      case 242:
        return <UkraineFormComponent />;
        break;
      case 243:
        return <UnitedArabEmiratesFormComponent />;
        break;
      case 244:
        return <UnitedKingdomFormComponent />;
        break;
      case 245:
        return <UnitedStatesFormComponent />;
        break;
      case 246:
        return <UruguayFormComponent />;
        break;
      case 247:
        return <UzbekistanFormComponent />;
        break;
      case 248:
        return <VanuatuFormComponent />;
        break;
      case 249:
        return <VaticanCityFormComponent />;
        break;
      case 250:
        return <VenezuelaFormComponent />;
        break;
      case 251:
        return <VietnamFormComponent />;
        break;
      case 252:
        return <WallisFutunaFormComponent />;
        break;
      case 253:
        return <WesternSaharaFormComponent />;
        break;
      case 254:
        return <YemenFormComponent />;
        break;
      case 255:
        return <ZambiaFormComponent />;
        break;
      case 256:
        return <ZimbabweFormComponent />;
        break;
      default:
        return <div></div>;
    }
  };

  return <div>{countryHandler(selectedCountry)}</div>;
}
