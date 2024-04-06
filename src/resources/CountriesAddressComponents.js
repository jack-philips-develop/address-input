import React from "react";
import Input from "../components/Input/Input";
import Select from "../components/select/Select";
import {useState} from "@types/react";
import {stateList as Brazil_stateList} from "./options/brazil";
import {provinceList as Canada_provinceList} from "./options/canada";

export function AfghanistanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-7"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-3 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function AlandIslandsFormComponent() {
  return (
    <div className="mb-4">
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <div className="row mx-0 mt-5 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-5"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AlbaniaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-3 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-7"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AlgeriaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AmericanSamoaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

const convertedList = [
  { id: 1, name: "- Select -" },
  { id: 2, name: "Andorra la Vella" },
  { id: 3, name: "Canillo" },
  { id: 4, name: "Escaldes-Engordany" },
  { id: 5, name: "La Massana" },
  { id: 6, name: "Ordino" },
  { id: 7, name: "Sant Julia de Loria" },
];

export function AndorraFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 d-flex">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">City</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function AngolaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-12 col-lg-7 col-md-7 col-sm-12"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AnguillaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-7 col-md-7 col-sm-9"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-4 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}
export function BelizeFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function BeninFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function BermudaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BhutanFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BoliviaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function BosniaHerzegovinaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BotswanaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BouvetIslandFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function BrazilFormComponent() {
    const [selectedState, setSelectedState] = useState(0);

    function convertStatesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const statesList = convertStatesToObjects(Brazil_stateList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Neighborhood'/>
        </div>
        <div className='d-flex mx-0'>
            {/* 💥 todo -> implement below select box based on states */}
            <Input containerClassName='mt-4 me-3 col-6 col-lg-4 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <div className={'mt-4 me-3 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='State'
                        isImportant={'true'}
                        options={statesList}
                        selectedOption={(option) => setSelectedState(option)}/>
            </div>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                   isImportant={'true'}/>
        </div>
    </div>)
}

export function BritishIndianOceanTerritoryFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                   isImportant={'true'}/>
        </div>
    </div>)
}

export function BritishVirginIslandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City'/>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BruneiFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function BulgariaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Middle Name'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code'/>
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function BurkinaFasoFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Codex'/>
        </div>
    </div>)
}

export function BurundiFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function CambodiaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'/>
        </div>
    </div>)
}

export function CameroonFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
        </div>
    </div>)
}

export function CanadaFormComponent() {
    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(Canada_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true'/>
            <Input containerClassName='col' id={1} label='Last name' isImportant='true'/>
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization'/>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true'/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <Input containerClassName='mt-0' id={1} label=''/>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true'/>
            <div className={'mt-4 me-3 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Province'
                        isImportant={'true'}
                        options={provincesList}
                        selectedOption={(option) => setSelectedProvince(option)}/>
            </div>
            <Input containerClassName='mt-4 me-3 col-6 col-lg col-md-4 col-sm-6' id={1} label='Postal code'
                   isImportant={'true'}/>
        </div>
    </div>)
}

export function AntarcticaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-12 col-lg-7 col-md-7 col-sm-12"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AntiguaBarbudaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-12 col-lg-7 col-md-7 col-sm-12"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function ArgentinaFormComponent() {
  const convertedList = [
    { id: 1, name: "Buenos Aires" },
    { id: 2, name: "Corrientes" },
    { id: 3, name: "Entre Ríos" },
    { id: 4, name: "Mendoza" },
    { id: 5, name: "San Luis" },
    { id: 6, name: "Santa Fe" },
    { id: 7, name: "Salta" },
    { id: 8, name: "Chaco" },
    { id: 9, name: "Chubut" },
    { id: 10, name: "Córdoba" },
    { id: 11, name: "Formosa" },
    { id: 12, name: "Jujuy" },
    { id: 13, name: "La Pampa" },
    { id: 14, name: "La Rioja" },
    { id: 15, name: "Misiones" },
    { id: 16, name: "Neuquén" },
    { id: 17, name: "Río Negro" },
    { id: 18, name: "San Juan" },
    { id: 19, name: "Santa Cruz" },
    { id: 20, name: "Santiago del Estero" },
    { id: 21, name: "Tierra del Fuego" },
    { id: 22, name: "Antarctica and the South Atlantic Islands" },
    { id: 23, name: "Tucumán" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0 mt-4">
        <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function ArmeniaFormComponent() {
  const convertedList = [
    { id: 1, name: "None" },
    { id: 2, name: "Aragatsotn" },
    { id: 3, name: "Ararat" },
    { id: 4, name: "Armavir" },
    { id: 5, name: "Gegharkunik" },
    { id: 6, name: "Kotayk" },
    { id: 7, name: "Lori" },
    { id: 8, name: "Shirak" },
    { id: 9, name: "Syunik" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-4 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-7 col-md-7 col-sm-9"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0 mt-4">
        <div className="mt-4 col-8 col-lg-4 col-md-4 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function ArubaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-12 col-lg-7 col-md-7 col-sm-12"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AscensionIslandFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-7 col-md-7 col-sm-9"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-4 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function AustraliaFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    { id: 2, name: "Australian Capital Territory" },
    { id: 3, name: "New South Wales" },
    { id: 4, name: "Northern Territory" },
    { id: 5, name: "Queensland" },
    { id: 6, name: "South Australia" },
    { id: 7, name: "Tasmania" },
    { id: 8, name: "Victoria" },
    { id: 9, name: "Western Australia" },
  ];

  return (
    <div className="my-4">
      <Input containerClassName="" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-5 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 gap-3">
        <Input
          containerClassName="mt-4 col-9 col-lg-6 col-md-6 col-sm-9"
          id={1}
          label="Suburb"
          isImportant="true"
        />
        <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-4 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function AustriaFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-5 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function AzerbaijanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Middle Name" />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-8 col-lg-5 col-md-5 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function BahamasFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    { id: 2, name: "Abaco" },
    { id: 3, name: "Acklins" },
    { id: 4, name: "Andros" },
    { id: 5, name: "Berry Islands" },
    { id: 6, name: "Bimini" },
    { id: 7, name: "Cat Island" },
    { id: 8, name: "Crooked Island" },
    { id: 9, name: "Eleuthera" },
    { id: 10, name: "Exuma" },
    { id: 11, name: "Grand Bahama" },
    { id: 12, name: "Harbour Island" },
    { id: 13, name: "Inagua" },
    { id: 14, name: "Long Island" },
    { id: 15, name: "Mayaguana" },
    { id: 16, name: "New Providence" },
    { id: 17, name: "Ragged Island" },
    { id: 18, name: "Rum Cay" },
    { id: 19, name: "San Salvador" },
    { id: 20, name: "Spanish Wells" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 d-flex">
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
        />
        <div className="mt-4 col-6 col-lg-6 col-md-6 col-sm-6">
          <div className="d-flex w-100">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Island</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function BahrainFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 gap-3">
        <Input
          containerClassName="mt-4 col-8 col-lg-7 col-md-7 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function BangladeshFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 gap-3">
        <Input
          containerClassName="mt-4 col-8 col-lg-7 col-md-7 col-sm-8"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function BarbadosFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    { id: 2, name: "Christ Church" },
    { id: 3, name: "Saint Andrew" },
    { id: 4, name: "Saint George" },
    { id: 5, name: "Saint James" },
    { id: 6, name: "Saint John" },
    { id: 7, name: "Saint Joseph" },
    { id: 8, name: "Sain Lucky" },
    { id: 9, name: "Saint Michael" },
    { id: 10, name: "Saint Peter" },
    { id: 11, name: "Saint Philip" },
    { id: 12, name: "Saint Thomas" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 d-flex">
        <Input
          containerClassName="mt-4 col-6 col-lg-8 col-md-8 col-sm-6"
          id={1}
          label="City"
        />
        <div className="mt-4 col-6 col-lg-4 col-md-4 col-sm-6">
          <div className="d-flex w-100">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Parish</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
      <div className="row mx-0">
        <Input
          containerClassName=" me-3 col-4 col-lg-4 col-md-4 col-sm-4"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function BelarusFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Middle Name" />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-5 col-md-5 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input containerClassName="mt-4 col-7" id={1} label="Region" />
      </div>
    </div>
  );
}

export function BelgiumFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function EquatorialGuineaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function EritreaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function EstoniaFormComponent() {
  const countyList = [
    { id: "", name: "- None -" },
    { id: "37", name: "Harjumaa" },
    { id: "39", name: "Hiiumaa" },
    { id: "45", name: "Ida-Virumaa" },
    { id: "50", name: "Jõgevamaa" },
    { id: "52", name: "Järvamaa" },
    { id: "56", name: "Läänemaa" },
    { id: "60", name: "Lääne-Virumaa" },
    { id: "64", name: "Põlvamaa" },
    { id: "68", name: "Pärnumaa" },
    { id: "71", name: "Raplamaa" },
    { id: "74", name: "Saaremaa" },
    { id: "79", name: "Tartumaa" },
    { id: "81", name: "Valgamaa" },
    { id: "84", name: "Viljandimaa" },
    { id: "87", name: "Võrumaa" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-6 col-lg-4 col-md-4 col-sm-6">
          <div className="d-flex w-100">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">County</p>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={countyList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function EswatiniFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="Postal code"
      />
    </div>
  );
}

export function EthiopiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function FalklandIslandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="City"
        isImportant="true"
      />
      <Input
        containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="Postal code"
        isImportant="true"
      />
    </div>
  );
}

export function FaroeIslandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function FijiFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function FinlandFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function FranceFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Cedex"
        />
      </div>
    </div>
  );
}

export function FrenchGuianaFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function FrenchPolynesiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <Input
        label="Island"
        containerClassName="mt-4"
        id={1}
        isImportant="true"
      />
    </div>
  );
}

export function FrenchSouthernTerritoriesFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GabonFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GambiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 mt-4 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="City" isImportant="true" />
    </div>
  );
}

export function GeorgiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GermanyFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          isImportant="true"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GhanaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GibraltarFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
      </div>
    </div>
  );
}

export function GreeceFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GreenlandFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GrenadaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GuadeloupeFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GuamFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Zip code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GuatemalaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GuernseyFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="City" isImportant="true" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Postal code"
        isImportant="true"
      />
    </div>
  );
}

export function GuineaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="Street address"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="City" isImportant="true" />
    </div>
  );
}

export function GuineaBissauFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function GuyanaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="City" isImportant="true" />
    </div>
  );
}

export function HaitiFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function HeardMcdonaldIslandsFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="mt-0" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Postal code" />
      </div>
    </div>
  );
}

export function HondurasFormComponent() {
  const departmentList = [
    { id: "", name: "- Select -" },
    { id: "AT", name: "Atlántida" },
    { id: "CH", name: "Choluteca" },
    { id: "CL", name: "Colón" },
    { id: "CM", name: "Comayagua" },
    { id: "CP", name: "Copán" },
    { id: "CR", name: "Cortés" },
    { id: "EP", name: "El Paraíso" },
    { id: "FM", name: "Francisco Morazán" },
    { id: "GD", name: "Gracias a Dios" },
    { id: "IN", name: "Intibucá" },
    { id: "IB", name: "Islas de la Bahía" },
    { id: "LP", name: "La Paz" },
    { id: "LE", name: "Lempira" },
    { id: "OC", name: "Ocotepeque" },
    { id: "OL", name: "Olancho" },
    { id: "SB", name: "Santa Bárbara" },
    { id: "VA", name: "Valle" },
    { id: "YO", name: "Yoro" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="col">
          <div className="d-flex w-100">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">
              Department
            </p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={departmentList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
      <Input containerClassName="col" id={1} label="Postal code" />
    </div>
  );
}

export function HongKongSarChinaFormComponent() {
  const areaList = [
    { id: "", name: "- Select -" },
    { id: "Kowloon", name: "Kowloon" },
    { id: "Hong Kong Island", name: "Hong Kong Island" },
    { id: "New Territories", name: "New Territories" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="col mt-4" id={1} label="District" />
      <div className="mt-4">
        <div className="d-flex w-100">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Area</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4 w-100"
          options={areaList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function HungaryFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input containerClassName="mt-4" id={1} label="City" isImportant="true" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Postal code"
        isImportant={true}
      />
    </div>
  );
}

export function IcelandFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function IndiaFormComponent() {
  const stateList = [
    { id: "", name: "- Select -" },
    { id: "AN", name: "Andaman & Nicobar" },
    { id: "AP", name: "Andhra Pradesh" },
    { id: "AR", name: "Arunachal Pradesh" },
    { id: "AS", name: "Assam" },
    { id: "BR", name: "Bihar" },
    { id: "CH", name: "Chandigarh" },
    { id: "CG", name: "Chhattisgarh" },
    { id: "DH", name: "Dadra & Nagar Haveli & Daman & Diu" },
    { id: "DL", name: "Delhi" },
    { id: "GA", name: "Goa" },
    { id: "GJ", name: "Gujarat" },
    { id: "HR", name: "Haryana" },
    { id: "HP", name: "Himachal Pradesh" },
    { id: "JK", name: "Jammu & Kashmir" },
    { id: "JH", name: "Jharkhand" },
    { id: "KA", name: "Karnataka" },
    { id: "KL", name: "Kerala" },
    { id: "LA", name: "Ladakh" },
    { id: "LD", name: "Lakshadweep" },
    { id: "MP", name: "Madhya Pradesh" },
    { id: "MH", name: "Maharashtra" },
    { id: "MN", name: "Manipur" },
    { id: "ML", name: "Meghalaya" },
    { id: "MZ", name: "Mizoram" },
    { id: "NL", name: "Nagaland" },
    { id: "OD", name: "Odisha" },
    { id: "PY", name: "Puducherry" },
    { id: "PB", name: "Punjab" },
    { id: "RJ", name: "Rajasthan" },
    { id: "SK", name: "Sikkim" },
    { id: "TN", name: "Tamil Nadu" },
    { id: "TS", name: "Telangana" },
    { id: "TR", name: "Tripura" },
    { id: "UP", name: "Uttar Pradesh" },
    { id: "UK", name: "Uttarakhand" },
    { id: "WB", name: "West Bengal" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Pin code"
          isImportant={true}
        />
      </div>
      <div className="mt-4">
        <div className="d-flex w-100">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4 w-100"
          options={stateList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function IndonesiaFormComponent() {
  const ProvinceList = [
    { id: "", name: "- Select -" },
    { id: "AC", name: "Aceh" },
    { id: "BA", name: "Bali" },
    { id: "BT", name: "Banten" },
    { id: "BE", name: "Bengkulu" },
    { id: "YO", name: "Special Region of Yogyakarta" },
    { id: "JK", name: "Jakarta" },
    { id: "GO", name: "Gorontalo" },
    { id: "JA", name: "Jambi" },
    { id: "JB", name: "West Java" },
    { id: "JT", name: "Central Java" },
    { id: "JI", name: "East Java" },
    { id: "KB", name: "West Kalimantan" },
    { id: "KS", name: "South Kalimantan" },
    { id: "KT", name: "Central Kalimantan" },
    { id: "KI", name: "East Kalimantan" },
    { id: "KU", name: "North Kalimantan" },
    { id: "BB", name: "Bangka Belitung Islands" },
    { id: "KR", name: "Riau Islands" },
    { id: "LA", name: "Lampung" },
    { id: "MA", name: "Maluku" },
    { id: "MU", name: "North Maluku" },
    { id: "NB", name: "West Nusa Tenggara" },
    { id: "NT", name: "East Nusa Tenggara" },
    { id: "PA", name: "Papua" },
    { id: "PB", name: "West Papua" },
    { id: "PD", name: "Southwest Papua" },
    { id: "PE", name: "Highland Papua" },
    { id: "PS", name: "South Papua" },
    { id: "PT", name: "Central Papua" },
    { id: "RI", name: "Riau" },
    { id: "SR", name: "West Sulawesi" },
    { id: "SN", name: "South Sulawesi" },
    { id: "ST", name: "Central Sulawesi" },
    { id: "SG", name: "South East Sulawesi" },
    { id: "SA", name: "North Sulawesi" },
    { id: "SB", name: "West Sumatra" },
    { id: "SS", name: "South Sumatra" },
    { id: "SU", name: "North Sumatra" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="City" />
      <div className="row mx-0 mt-4 gap-3">
        <div className="col">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={ProvinceList}
            selectedOption={() => console.log("***data")}
          />
        </div>

        <Input containerClassName="col" id={1} label="Postal code" />
      </div>
    </div>
  );
}

export function MoldovaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function MonacoFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function MongoliaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>

      <div className="row mx-0 px-0 d-flex justify-content-start gap-3 mt-5">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-4 col-sm-6"
          id={1}
          label="Province"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function MontenegroFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function MontserratFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function MoroccoFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function MozambiqueFormComponent() {
  const convertedList = [
    { id: 1, name: "-None-" },
    { id: 2, name: "Cidade De Maputo" },
    { id: 3, name: "Gaza" },
    { id: 4, name: "Inhambane" },
    { id: 5, name: "Manica" },
    { id: 6, name: "Maputo" },
    { id: 7, name: "Nampula" },
    { id: 8, name: "Niassa" },
    { id: 9, name: "Sofala" },
    { id: 10, name: "Tele" },
    { id: 11, name: "Zambezia" },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-2 col-2 col-lg-2 col-md-2 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4  me-3 col-6 col-lg-4 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function MyanmarBurmaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function NamibiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="City"
        isImportant="true"
      />

      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="Postal code"
      />
    </div>
  );
}

export function NauruFormComponent() {
  const convertedList = [
    { id: 1, name: "-Select-" },
    { id: 2, name: "Aiwo District" },
    { id: 3, name: "Anbar District" },
    { id: 4, name: "Anetan District" },
    { id: 5, name: "Biati District" },
    { id: 6, name: "Boe District" },
    { id: 7, name: "Buada District" },
    { id: 8, name: "Denigomodu District" },
    { id: 9, name: "Ewa District" },
    { id: 10, name: "Ijuw District" },
    { id: 11, name: "Meneng District" },
    { id: 12, name: "Nibok District" },
    { id: 13, name: "Uaboe District" },
    { id: 14, name: "Yaren District" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">District</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={convertedList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function NepalFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function NetherlandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NewCaledoniaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NewZealandFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="Suburb"
      />

      <div className="row mx-0 mt-4">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="Town/City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NicaraguaFormComponent() {
  const convertedList = [
    { id: 1, name: "-None-" },
    { id: 2, name: "Boaco" },
    { id: 3, name: "Carazo" },
    { id: 4, name: "Chinandega" },
    { id: 5, name: "Chontales" },
    { id: 6, name: "Esteli" },
    { id: 7, name: "Granada" },
    { id: 8, name: "Jinotega" },
    { id: 9, name: "Leon" },
    { id: 10, name: "Madriz" },
    { id: 11, name: "Managua" },
    { id: 12, name: "Masaya" },
    { id: 13, name: "Matagalpa" },
    { id: 14, name: "Nueva Segovia" },
    { id: 15, name: "Región Autónoma de la Costa Caribe Norte" },
    { id: 16, name: "Región Autónoma de la Costa Caribe Sur" },
    { id: 17, name: "Río San Juan" },
    { id: 18, name: "Rivas" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="Postal Code"
      />

      <div className="row mx-0 mt-4">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">
              Department
            </p>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function NigerFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NigeriaFormComponent() {
  const convertedList = [
    { id: 1, name: "-None-" },
    { id: 2, name: "Abia" },
    { id: 3, name: "Adamawa" },
    { id: 4, name: "Akwa Ibom" },
    { id: 5, name: "Anambra" },
    { id: 6, name: "Bauchi" },
    { id: 7, name: "Bayelsa" },
    { id: 8, name: "Benue" },
    { id: 9, name: "Borno" },
    { id: 10, name: "Cross River" },
    { id: 11, name: "Delta" },
    { id: 12, name: "Ebonyi" },
    { id: 13, name: "Edo" },
    { id: 14, name: "Ekiti" },
    { id: 15, name: "Enugu" },
    { id: 16, name: "FCT - Abuja" },
    { id: 17, name: "Gombe" },
    { id: 18, name: "Imo" },
    { id: 19, name: "Jigawa" },
    { id: 20, name: "Kaduna" },
    { id: 22, name: "Kano" },
    { id: 23, name: "Katsina" },
    { id: 24, name: "Kebbi" },
    { id: 25, name: "Kogi" },
    { id: 26, name: "Kwara" },
    { id: 27, name: "Lagos" },
    { id: 28, name: "Nasarawa" },
    { id: 29, name: "Niger" },
    { id: 30, name: "Ogun" },
    { id: 31, name: "Ondo" },
    { id: 32, name: "Osun" },
    { id: 33, name: "Oyo" },
    { id: 35, name: "Plateau" },
    { id: 36, name: "Rivers" },
    { id: 37, name: "Sokoto" },
    { id: 38, name: "Taraba" },
    { id: 39, name: "Yobe" },
    { id: 40, name: "Zamfara" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 col-9 col-lg-6 col-md-6 col-sm-9"
        id={1}
        label="Suburb"
      />
      <div className="row mx-0 mt-4">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>

      <div className="row mx-0 mt-4">
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}
export function NiueFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NorfolkIslandFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function NorthKoreaFormComponent() {
  const convertedList = [
    { id: 1, name: "-None-" },
    { id: 2, name: "Kangwon" },
    { id: 3, name: "Rason" },
    { id: 4, name: "Ryanggang" },
    { id: 5, name: "Chagang" },
    { id: 6, name: "South Pyongan" },
    { id: 7, name: "North Pyongan" },
    { id: 8, name: "Pyongyang" },
    { id: 9, name: "South Hamgyong" },
    { id: 10, name: "North Hamgyong" },
    { id: 11, name: "South Hwanghae" },
    { id: 12, name: "North Hwanghae" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="City"
        isImportant="true"
      />

      <div className="row mx-0">
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function NorthMacedoniaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NorthernMarianaIslandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Zip code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function NorwayFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="Post Town"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function OmanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="Postal code"
      />
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="City"
        isImportant="true"
      />
    </div>
  );
}

export function TanzaniaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function ThailandFormComponent() {
  const convertedList = [
    {
      name: "-Select-",
      id: "0",
    },
    {
      name: "Amnat Charoen",
      id: "th37",
    },
    {
      name: "Ang Thong",
      id: "th15",
    },
    {
      name: "Bueng Kan",
      id: "TH-38",
    },
    {
      name: "Buri Ram",
      id: "TH-31",
    },
    {
      name: "Chachoengsao",
      id: "TH-24",
    },
    {
      name: "Chai Nat",
      id: "TH-18",
    },
    {
      name: "Chaiyaphum",
      id: "TH-36",
    },
    {
      name: "Chanthaburi",
      id: "TH-22",
    },
    {
      name: "Chiang Mai",
      id: "TH-50",
    },
    {
      name: "Chiang Rai",
      id: "TH-57",
    },
    {
      name: "Chon Buri",
      id: "TH-20",
    },
    {
      name: "Chumphon",
      id: "TH-86",
    },
    {
      name: "Kalasin",
      id: "TH-46",
    },
    {
      name: "Kamphaeng Phet",
      id: "TH-62",
    },
    {
      name: "Kanchanaburi",
      id: "TH-71",
    },
    {
      name: "Khon Kaen",
      id: "TH-40",
    },
    {
      name: "Krabi",
      id: "TH-81",
    },
    {
      name: "Krung Thep Maha Nakhon",
      id: "TH-10",
    },
    {
      name: "Lampang",
      id: "TH-52",
    },
    {
      name: "Lamphun",
      id: "TH-51",
    },
    {
      name: "Loei",
      id: "TH-42",
    },
    {
      name: "Lop Buri",
      id: "TH-16",
    },
    {
      name: "Mae Hong Son",
      id: "TH-58",
    },
    {
      name: "Maha Sarakham",
      id: "TH-44",
    },
    {
      name: "Mukdahan",
      id: "TH-49",
    },
    {
      name: "Nakhon Nayok",
      id: "TH-26",
    },
    {
      name: "Nakhon Pathom",
      id: "TH-73",
    },
    {
      name: "Nakhon Phanom",
      id: "TH-48",
    },
    {
      name: "Nakhon Ratchasima",
      id: "TH-30",
    },
    {
      name: "Nakhon Sawan",
      id: "TH-60",
    },
    {
      name: "Nakhon Si Thammarat",
      id: "TH-80",
    },
    {
      name: "Nan",
      id: "TH-55",
    },
    {
      name: "Narathiwat",
      id: "TH-96",
    },
    {
      name: "Nong Bua Lam Phu",
      id: "TH-39",
    },
    {
      name: "Nong Khai",
      id: "TH-43",
    },
    {
      name: "Nonthaburi",
      id: "TH-12",
    },
    {
      name: "Pathum Thani",
      id: "TH-13",
    },
    {
      name: "Pattani",
      id: "TH-94",
    },
    {
      name: "Phangnga",
      id: "TH-82",
    },
    {
      name: "Phatthalung",
      id: "TH-93",
    },
    {
      name: "Phatthaya",
      id: "TH-S",
    },
    {
      name: "Phayao",
      id: "TH-56",
    },
    {
      name: "Phetchabun",
      id: "TH-67",
    },
    {
      name: "Phetchaburi",
      id: "TH-76",
    },
    {
      name: "Phichit",
      id: "TH-66",
    },
    {
      name: "Phitsanulok",
      id: "TH-65",
    },
    {
      name: "Phra Nakhon Si Ayutthaya",
      id: "TH-14",
    },
    {
      name: "Phrae",
      id: "TH-54",
    },
    {
      name: "Phuket",
      id: "TH-83",
    },
    {
      name: "Prachin Buri",
      id: "TH-25",
    },
    {
      name: "Prachuap Khiri Khan",
      id: "TH-77",
    },
    {
      name: "Ranong",
      id: "TH-85",
    },
    {
      name: "Ratchaburi",
      id: "TH-70",
    },
    {
      name: "Rayong",
      id: "TH-21",
    },
    {
      name: "Roi Et",
      id: "TH-45",
    },
    {
      name: "Sa Kaeo",
      id: "TH-27",
    },
    {
      name: "Sakon Nakhon",
      id: "TH-47",
    },
    {
      name: "Samut Prakan",
      id: "TH-11",
    },
    {
      name: "Samut Sakhon",
      id: "TH-74",
    },
    {
      name: "Samut Songkhram",
      id: "TH-75",
    },
    {
      name: "Saraburi",
      id: "TH-19",
    },
    {
      name: "Satun",
      id: "TH-91",
    },
    {
      name: "Si Sa Ket",
      id: "TH-33",
    },
    {
      name: "Sing Buri",
      id: "TH-17",
    },
    {
      name: "Songkhla",
      id: "TH-90",
    },
    {
      name: "Sukhothai",
      id: "TH-64",
    },
    {
      name: "Suphan Buri",
      id: "TH-72",
    },
    {
      name: "Surat Thani",
      id: "TH-84",
    },
    {
      name: "Surin",
      id: "TH-32",
    },
    {
      name: "Tak",
      id: "TH-63",
    },
    {
      name: "Trang",
      id: "TH-92",
    },
    {
      name: "Trat",
      id: "TH-23",
    },
    {
      name: "Ubon Ratchathani",
      id: "TH-34",
    },
    {
      name: "Udon Thani",
      id: "TH-41",
    },
    {
      name: "Uthai Thani",
      id: "TH-61",
    },
    {
      name: "Uttaradit",
      id: "TH-53",
    },
    {
      name: "Yala",
      id: "TH-95",
    },
    {
      name: "Yasothon",
      id: "TH-35",
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-9 col-lg-6 col-md-6 col-sm-9"
          id={1}
          label="Suburb"
        />
        <Input
          containerClassName="mt-4  col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="mt-4  col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TimorLesteComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TogoFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}
export function TokelauFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TongaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TrinidadTobagoFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TristanDaCunhaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4 me-3 col-3 col-lg-3 col-md-3 col-sm-3"
        id={1}
        label="Postal Code"
      />
    </div>
  );
}

export function TunisiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-3 col-lg-3 col-md-3 col-sm-3"
          id={1}
          label="Postal Code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TurkeyFormComponent() {
  const convertedList = [
    {
      name: "-Select-",
      id: "0",
    },
    {
      name: "Adana",
      id: "TR-01",
    },
    {
      name: "Adıyaman",
      id: "TR-02",
    },
    {
      name: "Afyonkarahisar",
      id: "TR-03",
    },
    {
      name: "Aksaray",
      id: "TR-68",
    },
    {
      name: "Amasya",
      id: "TR-05",
    },
    {
      name: "Ankara",
      id: "TR-06",
    },
    {
      name: "Antalya",
      id: "TR-07",
    },
    {
      name: "Ardahan",
      id: "TR-75",
    },
    {
      name: "Artvin",
      id: "TR-08",
    },
    {
      name: "Aydın",
      id: "TR-09",
    },
    {
      name: "Ağrı",
      id: "TR-04",
    },
    {
      name: "Balıkesir",
      id: "TR-10",
    },
    {
      name: "Bartın",
      id: "TR-74",
    },
    {
      name: "Batman",
      id: "TR-72",
    },
    {
      name: "Bayburt",
      id: "TR-69",
    },
    {
      name: "Bilecik",
      id: "TR-11",
    },
    {
      name: "Bingöl",
      id: "TR-12",
    },
    {
      name: "Bitlis",
      id: "TR-13",
    },
    {
      name: "Bolu",
      id: "TR-14",
    },
    {
      name: "Burdur",
      id: "TR-15",
    },
    {
      name: "Bursa",
      id: "TR-16",
    },
    {
      name: "Denizli",
      id: "TR-20",
    },
    {
      name: "Diyarbakır",
      id: "TR-21",
    },
    {
      name: "Düzce",
      id: "TR-81",
    },
    {
      name: "Edirne",
      id: "TR-22",
    },
    {
      name: "Elazığ",
      id: "TR-23",
    },
    {
      name: "Erzincan",
      id: "TR-24",
    },
    {
      name: "Erzurum",
      id: "TR-25",
    },
    {
      name: "Eskişehir",
      id: "TR-26",
    },
    {
      name: "Gaziantep",
      id: "TR-27",
    },
    {
      name: "Giresun",
      id: "TR-28",
    },
    {
      name: "Gümüşhane",
      id: "TR-29",
    },
    {
      name: "Hakkâri",
      id: "TR-30",
    },
    {
      name: "Hatay",
      id: "TR-31",
    },
    {
      name: "Isparta",
      id: "TR-32",
    },
    {
      name: "Iğdır",
      id: "TR-76",
    },
    {
      name: "Kahramanmaraş",
      id: "TR-46",
    },
    {
      name: "Karabük",
      id: "TR-78",
    },
    {
      name: "Karaman",
      id: "TR-70",
    },
    {
      name: "Kars",
      id: "TR-36",
    },
    {
      name: "Kastamonu",
      id: "TR-37",
    },
    {
      name: "Kayseri",
      id: "TR-38",
    },
    {
      name: "Kilis",
      id: "TR-79",
    },
    {
      name: "Kocaeli",
      id: "TR-41",
    },
    {
      name: "Konya",
      id: "TR-42",
    },
    {
      name: "Kütahya",
      id: "TR-43",
    },
    {
      name: "Kırklareli",
      id: "TR-39",
    },
    {
      name: "Kırıkkale",
      id: "TR-71",
    },
    {
      name: "Kırşehir",
      id: "TR-40",
    },
    {
      name: "Malatya",
      id: "TR-44",
    },
    {
      name: "Manisa",
      id: "TR-45",
    },
    {
      name: "Mardin",
      id: "TR-47",
    },
    {
      name: "Mersin",
      id: "TR-33",
    },
    {
      name: "Muğla",
      id: "TR-48",
    },
    {
      name: "Muş",
      id: "TR-49",
    },
    {
      name: "Nevşehir",
      id: "TR-50",
    },
    {
      name: "Niğde",
      id: "TR-51",
    },
    {
      name: "Ordu",
      id: "TR-52",
    },
    {
      name: "Osmaniye",
      id: "TR-80",
    },
    {
      name: "Rize",
      id: "TR-53",
    },
    {
      name: "Sakarya",
      id: "TR-54",
    },
    {
      name: "Samsun",
      id: "TR-55",
    },
    {
      name: "Siirt",
      id: "TR-56",
    },
    {
      name: "Sinop",
      id: "TR-57",
    },
    {
      name: "Sivas",
      id: "TR-58",
    },
    {
      name: "Tekirdağ",
      id: "TR-59",
    },
    {
      name: "Tokat",
      id: "TR-60",
    },
    {
      name: "Trabzon",
      id: "TR-61",
    },
    {
      name: "Tunceli",
      id: "TR-62",
    },
    {
      name: "Uşak",
      id: "TR-64",
    },
    {
      name: "Van",
      id: "TR-65",
    },
    {
      name: "Yalova",
      id: "TR-77",
    },
    {
      name: "Yozgat",
      id: "TR-66",
    },
    {
      name: "Zonguldak",
      id: "TR-67",
    },
    {
      name: "Çanakkale",
      id: "TR-17",
    },
    {
      name: "Çankırı",
      id: "TR-18",
    },
    {
      name: "Çorum",
      id: "TR-19",
    },
    {
      name: "İstanbul",
      id: "TR-34",
    },
    {
      name: "İzmir",
      id: "TR-35",
    },
    {
      name: "Şanlıurfa",
      id: "TR-63",
    },
    {
      name: "Şırnak",
      id: "TR-73",
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-2 col-2 col-lg-2 col-md-2 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4  me-3 col-6 col-lg-4 col-md-6 col-sm-6"
          id={1}
          label="District"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function TurkmenistanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-3 col-lg-3 col-md-3 col-sm-3"
          id={1}
          label="Postal Code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function TurksCaicosIslandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4 me-3 col-3 col-lg-3 col-md-3 col-sm-3"
        id={1}
        label="Postal Code"
        isImportant="true"
      />
    </div>
  );
}

export function TuvaluFormComponent() {
  const convertedList = [
    { id: 1, name: "- None -" },
    { id: 2, name: "Funafuti" },
    { id: 3, name: "Nanumanga" },
    { id: 4, name: "Nanumea" },
    { id: 5, name: "Niulakita" },
    { id: 6, name: "Niutao" },
    { id: 7, name: "Nui" },
    { id: 8, name: "Nukufetau" },
    { id: 9, name: "Nukulaelae" },
    { id: 10, name: "Vaitupu" },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Island</p>
        </div>
        <Select
          selectClassName="mb-4"
          options={convertedList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function USOutlyingIslandsFormComponent() {
  const convertedList = [
    { id: 1, name: "- None -" },
    {
      name: "Baker Island",
      id: "UM-81",
    },
    {
      name: "Howland Island",
      id: "UM-84",
    },
    {
      name: "Jarvis Island",
      id: "UM-86",
    },
    {
      name: "Johnston Atoll",
      id: "UM-67",
    },
    {
      name: "Kingman Reef",
      id: "UM-89",
    },
    {
      name: "Midway Islands",
      id: "UM-71",
    },
    {
      name: "Navassa Island",
      id: "UM-76",
    },
    {
      name: "Palmyra Atoll",
      id: "UM-95",
    },
    {
      name: "Wake Island",
      id: "UM-79",
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="mt-4 me-3 col-2 col-lg-2 col-md-2 col-sm-2"
          id={1}
          label="Zip Code"
        />
      </div>
    </div>
  );
}

export function USVirginIslandsFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-3 col-lg-3 col-md-3 col-sm-3"
          id={1}
          label="Zip Code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function UgandaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function UkraineFormComponent() {
  const convertedList = [
    { id: 0, name: "- None -" },
    {
      name: "Avtonomna Respublika Krym",
      id: "UA-43",
    },
    {
      name: "Cherkas'ka Oblast'",
      id: "UA-71",
    },
    {
      name: "Chernihivs'ka Oblast'",
      id: "UA-74",
    },
    {
      name: "Chernivets'ka Oblast'",
      id: "UA-77",
    },
    {
      name: "Dnipropetrovs'ka Oblast'",
      id: "UA-12",
    },
    {
      name: "Donets'ka Oblast'",
      id: "UA-14",
    },
    {
      name: "Ivano-Frankivs'ka Oblast'",
      id: "UA-26",
    },
    {
      name: "Kharkivs'ka Oblast'",
      id: "UA-63",
    },
    {
      name: "Khersons'ka Oblast'",
      id: "UA-65",
    },
    {
      name: "Khmel'nyts'ka Oblast'",
      id: "UA-68",
    },
    {
      name: "Kirovohrads'ka Oblast'",
      id: "UA-35",
    },
    {
      name: "Kyïv",
      id: "UA-30",
    },
    {
      name: "Kyïvs'ka Oblast'",
      id: "UA-32",
    },
    {
      name: "L'vivs'ka Oblast'",
      id: "UA-46",
    },
    {
      name: "Luhans'ka Oblast'",
      id: "UA-09",
    },
    {
      name: "Mykolaïvs'ka Oblast'",
      id: "UA-48",
    },
    {
      name: "Odes'ka Oblast'",
      id: "UA-51",
    },
    {
      name: "Poltavs'ka Oblast'",
      id: "UA-53",
    },
    {
      name: "Rivnens'ka Oblast'",
      id: "UA-56",
    },
    {
      name: "Sevastopol'",
      id: "UA-40",
    },
    {
      name: "Sums'ka Oblast'",
      id: "UA-59",
    },
    {
      name: "Ternopil's'ka Oblast'",
      id: "UA-61",
    },
    {
      name: "Vinnyts'ka Oblast'",
      id: "UA-05",
    },
    {
      name: "Volyns'ka Oblast'",
      id: "UA-07",
    },
    {
      name: "Zakarpats'ka Oblast'",
      id: "UA-21",
    },
    {
      name: "Zaporiz'ka Oblast'",
      id: "UA-23",
    },
    {
      name: "Zhytomyrs'ka Oblast'",
      id: "UA-18",
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Middle name" />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Region</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={convertedList}
          selectedOption={() => console.log("***data")}
        />
      </div>
      <Input
        containerClassName=" me-3 col-3 col-lg-3 col-md-3 col-sm-3"
        id={1}
        label="Postal Code"
        isImportant="true"
      />
    </div>
  );
}

export function UnitedArabEmiratesFormComponent() {
  const convertedList = [
    { id: 0, name: "- None -" },
    {
      id: "AJ",
      name: "'Ajmān",
      subdivision: null,
    },
    {
      id: "AZ",
      name: "Abū Z̧aby",
      subdivision: null,
    },
    {
      id: "FU",
      name: "Al Fujayrah",
      subdivision: null,
    },
    {
      id: "SH",
      name: "Ash Shāriqah",
      subdivision: null,
    },
    {
      id: "DU",
      name: "Dubayy",
      subdivision: null,
    },
    {
      id: "RK",
      name: "Ra's al Khaymah",
      subdivision: null,
    },
    {
      id: "UQ",
      name: "Umm al Qaywayn",
      subdivision: null,
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Emirate</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={convertedList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function UnitedKingdomFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="Town/City"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
        id={1}
        label="Postal code"
        isImportant="true"
      />
    </div>
  );
}

export function UnitedStatesFormComponent() {
  const convertedList = [
    { id: 0, name: "- None -" },
    {
      id: "DC",
      name: "District of Columbia",
      subdivision: "district",
    },
    {
      id: "AS",
      name: "American Samoa",
      subdivision: "outlying territory",
    },
    {
      id: "GU",
      name: "Guam",
      subdivision: "outlying territory",
    },
    {
      id: "MP",
      name: "Northern Mariana Islands",
      subdivision: "outlying territory",
    },
    {
      id: "PR",
      name: "Puerto Rico",
      subdivision: "outlying territory",
    },
    {
      id: "UM",
      name: "United States Minor Outlying Islands",
      subdivision: "outlying territory",
    },
    {
      id: "VI",
      name: "Virgin Islands, U.S.",
      subdivision: "outlying territory",
    },
    {
      id: "AL",
      name: "Alabama",
      subdivision: "state",
    },
    {
      id: "AK",
      name: "Alaska",
      subdivision: "state",
    },
    {
      id: "AZ",
      name: "Arizona",
      subdivision: "state",
    },
    {
      id: "AR",
      name: "Arkansas",
      subdivision: "state",
    },
    {
      id: "CA",
      name: "California",
      subdivision: "state",
    },
    {
      id: "CO",
      name: "Colorado",
      subdivision: "state",
    },
    {
      id: "CT",
      name: "Connecticut",
      subdivision: "state",
    },
    {
      id: "DE",
      name: "Delaware",
      subdivision: "state",
    },
    {
      id: "FL",
      name: "Florida",
      subdivision: "state",
    },
    {
      id: "GA",
      name: "Georgia",
      subdivision: "state",
    },
    {
      id: "HI",
      name: "Hawaii",
      subdivision: "state",
    },
    {
      id: "ID",
      name: "Idaho",
      subdivision: "state",
    },
    {
      id: "IL",
      name: "Illinois",
      subdivision: "state",
    },
    {
      id: "IN",
      name: "Indiana",
      subdivision: "state",
    },
    {
      id: "IA",
      name: "Iowa",
      subdivision: "state",
    },
    {
      id: "KS",
      name: "Kansas",
      subdivision: "state",
    },
    {
      id: "KY",
      name: "Kentucky",
      subdivision: "state",
    },
    {
      id: "LA",
      name: "Louisiana",
      subdivision: "state",
    },
    {
      id: "ME",
      name: "Maine",
      subdivision: "state",
    },
    {
      id: "MD",
      name: "Maryland",
      subdivision: "state",
    },
    {
      id: "MA",
      name: "Massachusetts",
      subdivision: "state",
    },
    {
      id: "MI",
      name: "Michigan",
      subdivision: "state",
    },
    {
      id: "MN",
      name: "Minnesota",
      subdivision: "state",
    },
    {
      id: "MS",
      name: "Mississippi",
      subdivision: "state",
    },
    {
      id: "MO",
      name: "Missouri",
      subdivision: "state",
    },
    {
      id: "MT",
      name: "Montana",
      subdivision: "state",
    },
    {
      id: "NE",
      name: "Nebraska",
      subdivision: "state",
    },
    {
      id: "NV",
      name: "Nevada",
      subdivision: "state",
    },
    {
      id: "NH",
      name: "New Hampshire",
      subdivision: "state",
    },
    {
      id: "NJ",
      name: "New Jersey",
      subdivision: "state",
    },
    {
      id: "NM",
      name: "New Mexico",
      subdivision: "state",
    },
    {
      id: "NY",
      name: "New York",
      subdivision: "state",
    },
    {
      id: "NC",
      name: "North Carolina",
      subdivision: "state",
    },
    {
      id: "ND",
      name: "North Dakota",
      subdivision: "state",
    },
    {
      id: "OH",
      name: "Ohio",
      subdivision: "state",
    },
    {
      id: "OK",
      name: "Oklahoma",
      subdivision: "state",
    },
    {
      id: "OR",
      name: "Oregon",
      subdivision: "state",
    },
    {
      id: "PA",
      name: "Pennsylvania",
      subdivision: "state",
    },
    {
      id: "RI",
      name: "Rhode Island",
      subdivision: "state",
    },
    {
      id: "SC",
      name: "South Carolina",
      subdivision: "state",
    },
    {
      id: "SD",
      name: "South Dakota",
      subdivision: "state",
    },
    {
      id: "TN",
      name: "Tennessee",
      subdivision: "state",
    },
    {
      id: "TX",
      name: "Texas",
      subdivision: "state",
    },
    {
      id: "UT",
      name: "Utah",
      subdivision: "state",
    },
    {
      id: "VT",
      name: "Vermont",
      subdivision: "state",
    },
    {
      id: "VA",
      name: "Virginia",
      subdivision: "state",
    },
    {
      id: "WA",
      name: "Washington",
      subdivision: "state",
    },
    {
      id: "WV",
      name: "West Virginia",
      subdivision: "state",
    },
    {
      id: "WI",
      name: "Wisconsin",
      subdivision: "state",
    },
    {
      id: "WY",
      name: "Wyoming",
      subdivision: "state",
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />

      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="mt-4 me-3 col-2 col-lg-2 col-md-2 col-sm-2"
          id={1}
          label="Zip Code"
        />
      </div>
    </div>
  );
}

export function UruguayFormComponent() {
  const convertedList = [
    { id: 0, name: "- None -" },
    {
      id: "AR",
      name: "Artigas",
      subdivision: null,
    },
    {
      id: "CA",
      name: "Canelones",
      subdivision: null,
    },
    {
      id: "CL",
      name: "Cerro Largo",
      subdivision: null,
    },
    {
      id: "CO",
      name: "Colonia",
      subdivision: null,
    },
    {
      id: "DU",
      name: "Durazno",
      subdivision: null,
    },
    {
      id: "FS",
      name: "Flores",
      subdivision: null,
    },
    {
      id: "FD",
      name: "Florida",
      subdivision: null,
    },
    {
      id: "LA",
      name: "Lavalleja",
      subdivision: null,
    },
    {
      id: "MA",
      name: "Maldonado",
      subdivision: null,
    },
    {
      id: "MO",
      name: "Montevideo",
      subdivision: null,
    },
    {
      id: "PA",
      name: "Paysandú",
      subdivision: null,
    },
    {
      id: "RV",
      name: "Rivera",
      subdivision: null,
    },
    {
      id: "RO",
      name: "Rocha",
      subdivision: null,
    },
    {
      id: "RN",
      name: "Río Negro",
      subdivision: null,
    },
    {
      id: "SA",
      name: "Salto",
      subdivision: null,
    },
    {
      id: "SJ",
      name: "San José",
      subdivision: null,
    },
    {
      id: "SO",
      name: "Soriano",
      subdivision: null,
    },
    {
      id: "TA",
      name: "Tacuarembó",
      subdivision: null,
    },
    {
      id: "TT",
      name: "Treinta y Tres",
      subdivision: null,
    },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />

      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-2 col-lg-2 col-md-2 col-sm-2"
          id={1}
          label="Postal Code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function UzbekistanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-2 col-lg-2 col-md-2 col-sm-2"
          id={1}
          label="Postal Code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="Province"
      />
    </div>
  );
}

export function VanuatuFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
        id={1}
        label="City"
        isImportant="true"
      />
    </div>
  );
}

export function VaticanCityFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-2 col-lg-2 col-md-2 col-sm-2"
          id={1}
          label="Postal Code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function VenezuelaFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    {
      id: "Z",
      name: "Amazonas",
      subdivision: null,
    },
    {
      id: "B",
      name: "Anzoátegui",
      subdivision: null,
    },
    {
      id: "C",
      name: "Apure",
      subdivision: null,
    },
    {
      id: "D",
      name: "Aragua",
      subdivision: null,
    },
    {
      id: "E",
      name: "Barinas",
      subdivision: null,
    },
    {
      id: "F",
      name: "Bolívar",
      subdivision: null,
    },
    {
      id: "G",
      name: "Carabobo",
      subdivision: null,
    },
    {
      id: "H",
      name: "Cojedes",
      subdivision: null,
    },
    {
      id: "Y",
      name: "Delta Amacuro",
      subdivision: null,
    },
    {
      id: "W",
      name: "Dependencias Federales",
      subdivision: null,
    },
    {
      id: "A",
      name: "Distrito Capital",
      subdivision: null,
    },
    {
      id: "I",
      name: "Falcón",
      subdivision: null,
    },
    {
      id: "J",
      name: "Guárico",
      subdivision: null,
    },
    {
      id: "K",
      name: "Lara",
      subdivision: null,
    },
    {
      id: "M",
      name: "Miranda",
      subdivision: null,
    },
    {
      id: "N",
      name: "Monagas",
      subdivision: null,
    },
    {
      id: "L",
      name: "Mérida",
      subdivision: null,
    },
    {
      id: "O",
      name: "Nueva Esparta",
      subdivision: null,
    },
    {
      id: "P",
      name: "Portuguesa",
      subdivision: null,
    },
    {
      id: "R",
      name: "Sucre",
      subdivision: null,
    },
    {
      id: "T",
      name: "Trujillo",
      subdivision: null,
    },
    {
      id: "S",
      name: "Táchira",
      subdivision: null,
    },
    {
      id: "X",
      name: "Vargas",
      subdivision: null,
    },
    {
      id: "U",
      name: "Yaracuy",
      subdivision: null,
    },
    {
      id: "V",
      name: "Zulia",
      subdivision: null,
    },
  ];

  return (
    <div className="my-4">
      <Input containerClassName="" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-5 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 gap-3">
        <Input
          containerClassName="mt-4 col-9 col-lg-6 col-md-6 col-sm-9"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 col-2 col-lg-2 col-md-2 col-sm-9"
          id={1}
          label="Postal code"
        />

        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">State</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
    </div>
  );
}

export function VietnamFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    {
      id: "44",
      name: "An Giang",
      subdivision: null,
    },
    {
      id: "43",
      name: "Bà Rịa–Vũng Tàu",
      subdivision: null,
    },
    {
      id: "57",
      name: "Bình Dương",
      subdivision: null,
    },
    {
      id: "58",
      name: "Bình Phước",
      subdivision: null,
    },
    {
      id: "40",
      name: "Bình Thuận",
      subdivision: null,
    },
    {
      id: "31",
      name: "Bình Định",
      subdivision: null,
    },
    {
      id: "55",
      name: "Bạc Liêu",
      subdivision: null,
    },
    {
      id: "54",
      name: "Bắc Giang",
      subdivision: null,
    },
    {
      id: "53",
      name: "Bắc Kạn",
      subdivision: null,
    },
    {
      id: "56",
      name: "Bắc Ninh",
      subdivision: null,
    },
    {
      id: "50",
      name: "Bến Tre",
      subdivision: null,
    },
    {
      id: "04",
      name: "Cao Bằng",
      subdivision: null,
    },
    {
      id: "59",
      name: "Cà Mau",
      subdivision: null,
    },
    {
      id: "CT",
      name: "Cần Thơ",
      subdivision: null,
    },
    {
      id: "30",
      name: "Gia Lai",
      subdivision: null,
    },
    {
      id: "03",
      name: "Hà Giang",
      subdivision: null,
    },
    {
      id: "63",
      name: "Hà Nam",
      subdivision: null,
    },
    {
      id: "HN",
      name: "Hà Nội",
      subdivision: null,
    },
    {
      id: "15",
      name: "Hà Tây",
      subdivision: null,
    },
    {
      id: "23",
      name: "Hà Tĩnh",
      subdivision: null,
    },
    {
      id: "14",
      name: "Hòa Bình",
      subdivision: null,
    },
    {
      id: "66",
      name: "Hưng Yên",
      subdivision: null,
    },
    {
      id: "61",
      name: "Hải Dương",
      subdivision: null,
    },
    {
      id: "HP",
      name: "Hải Phòng",
      subdivision: null,
    },
    {
      id: "73",
      name: "Hậu Giang",
      subdivision: null,
    },
    {
      id: "SG",
      name: "Hồ Chí Minh",
      subdivision: null,
    },
    {
      id: "34",
      name: "Khánh Hòa",
      subdivision: null,
    },
    {
      id: "47",
      name: "Kiên Giang",
      subdivision: null,
    },
    {
      id: "28",
      name: "Kon Tum",
      subdivision: null,
    },
    {
      id: "01",
      name: "Lai Châu",
      subdivision: null,
    },
    {
      id: "41",
      name: "Long An",
      subdivision: null,
    },
    {
      id: "02",
      name: "Lào Cai",
      subdivision: null,
    },
    {
      id: "35",
      name: "Lâm Đồng",
      subdivision: null,
    },
    {
      id: "09",
      name: "Lạng Sơn",
      subdivision: null,
    },
    {
      id: "67",
      name: "Nam Định",
      subdivision: null,
    },
    {
      id: "22",
      name: "Nghệ An",
      subdivision: null,
    },
    {
      id: "18",
      name: "Ninh Bình",
      subdivision: null,
    },
    {
      id: "36",
      name: "Ninh Thuận",
      subdivision: null,
    },
    {
      id: "68",
      name: "Phú Thọ",
      subdivision: null,
    },
    {
      id: "32",
      name: "Phú Yên",
      subdivision: null,
    },
    {
      id: "24",
      name: "Quảng Bình",
      subdivision: null,
    },
    {
      id: "27",
      name: "Quảng Nam",
      subdivision: null,
    },
    {
      id: "29",
      name: "Quảng Ngãi",
      subdivision: null,
    },
    {
      id: "13",
      name: "Quảng Ninh",
      subdivision: null,
    },
    {
      id: "25",
      name: "Quảng Trị",
      subdivision: null,
    },
    {
      id: "52",
      name: "Sóc Trăng",
      subdivision: null,
    },
    {
      id: "05",
      name: "Sơn La",
      subdivision: null,
    },
    {
      id: "21",
      name: "Thanh Hóa",
      subdivision: null,
    },
    {
      id: "20",
      name: "Thái Bình",
      subdivision: null,
    },
    {
      id: "69",
      name: "Thái Nguyên",
      subdivision: null,
    },
    {
      id: "26",
      name: "Thừa Thiên–Huế",
      subdivision: null,
    },
    {
      id: "46",
      name: "Tiền Giang",
      subdivision: null,
    },
    {
      id: "51",
      name: "Trà Vinh",
      subdivision: null,
    },
    {
      id: "07",
      name: "Tuyên Quang",
      subdivision: null,
    },
    {
      id: "37",
      name: "Tây Ninh",
      subdivision: null,
    },
    {
      id: "49",
      name: "Vĩnh Long",
      subdivision: null,
    },
    {
      id: "70",
      name: "Vĩnh Phúc",
      subdivision: null,
    },
    {
      id: "06",
      name: "Yên Bái",
      subdivision: null,
    },
    {
      id: "71",
      name: "Điện Biên",
      subdivision: null,
    },
    {
      id: "DN",
      name: "Đà Nẵng",
      subdivision: null,
    },
    {
      id: "33",
      name: "Đắk Lắk",
      subdivision: null,
    },
    {
      id: "72",
      name: "Đắk Nông",
      subdivision: null,
    },
    {
      id: "39",
      name: "Đồng Nai",
      subdivision: null,
    },
    {
      id: "45",
      name: "Đồng Tháp",
      subdivision: null,
    },
  ];

  return (
    <div className="my-4">
      <Input containerClassName="" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-5 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="mt-4 col-9 col-lg-6 col-md-6 col-sm-9"
        id={1}
        label="City"
        isImportant="true"
      />

      <div className="row mx-0 gap-3">
        <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-8 px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4"
            options={convertedList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="mt-4 col-2 col-lg-2 col-md-2 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}
export function WallisFutunaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function WesternSaharaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function YemenFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function ZambiaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6"
          id={1}
          label="Postal code"
        />
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function ZimbabweFormComponent() {
  const convertedList = [
    { id: 1, name: "Select" },
    {
      id: "BU",
      name: "Bulawayo",
      subdivision: null,
    },
    {
      id: "HA",
      name: "Harare",
      subdivision: null,
    },
    {
      id: "MA",
      name: "Manicaland",
      subdivision: null,
    },
    {
      id: "MC",
      name: "Mashonaland Central",
      subdivision: null,
    },
    {
      id: "ME",
      name: "Mashonaland East",
      subdivision: null,
    },
    {
      id: "MW",
      name: "Mashonaland West",
      subdivision: null,
    },
    {
      id: "MV",
      name: "Masvingo",
      subdivision: null,
    },
    {
      id: "MN",
      name: "Matabeleland North",
      subdivision: null,
    },
    {
      id: "MS",
      name: "Matabeleland South",
      subdivision: null,
    },
    {
      id: "MI",
      name: "Midlands",
      subdivision: null,
    },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>

      <div className="mt-4 col-3 col-lg-3 col-md-3 col-sm-8 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={convertedList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function IranFormComponent() {
  const ProvinceList = [
    { id: "", name: "- Select -" },
    { id: "03", name: "East Azerbaijan Province" },
    { id: "04", name: "West Azerbaijan Province" },
    { id: "24", name: "Ardabil Province" },
    { id: "10", name: "Isfahan Province" },
    { id: "30", name: "Alborz Province" },
    { id: "16", name: "Ilam Province" },
    { id: "18", name: "Bushehr Province" },
    { id: "23", name: "Tehran Province" },
    { id: "14", name: "Chaharmahal and Bakhtiari Province" },
    { id: "29", name: "South Khorasan Province" },
    { id: "09", name: "Razavi Khorasan Province" },
    { id: "28", name: "North Khorasan Province" },
    { id: "06", name: "Khuzestan Province" },
    { id: "19", name: "Zanjan Province" },
    { id: "20", name: "Semnan Province" },
    { id: "11", name: "Sistan and Baluchestan Province" },
    { id: "07", name: "Fars Province" },
    { id: "26", name: "Qazvin Province" },
    { id: "25", name: "Qom Province" },
    { id: "12", name: "Kurdistan Province" },
    { id: "08", name: "Kerman Province" },
    { id: "05", name: "Kermanshah Province" },
    { id: "17", name: "Kohgiluyeh and Boyer-Ahmad Province" },
    { id: "27", name: "Golestan Province" },
    { id: "01", name: "Gilan Province" },
    { id: "15", name: "Lorestan Province" },
    { id: "02", name: "Mazandaran Province" },
    { id: "00", name: "Markazi Province" },
    { id: "22", name: "Hormozgan Province" },
    { id: "13", name: "Hamadan Province" },
    { id: "21", name: "Yazd Province" },
  ];

  return (
    <div className="my-4">
      <Input containerClassName="mt-0" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <div className="mt-4">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={ProvinceList}
          selectedOption={() => console.log("***data")}
        />
      </div>
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant={true}
        />
        <Input containerClassName="col" id={1} label="Neighborhood" />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-4" id={1} label="Postal code" />
    </div>
  );
}

export function IraqFormComponent() {
  return (
    <div className="my-4">
      <Input containerClassName="mt-0" id={1} label="Organization" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 px-0 mt-4 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant={true}
        />
        <Input
          containerClassName="col"
          id={1}
          label="Province"
          isImportant={true}
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Postal code" />
    </div>
  );
}

export function IrelandFormComponent() {
  const countyList = [
    { id: "", name: "- None -" },
    { id: "37", name: "Harjumaa" },
    { id: "39", name: "Hiiumaa" },
    { id: "45", name: "Ida-Virumaa" },
    { id: "50", name: "Jõgevamaa" },
    { id: "52", name: "Järvamaa" },
    { id: "56", name: "Läänemaa" },
    { id: "60", name: "Lääne-Virumaa" },
    { id: "64", name: "Põlvamaa" },
    { id: "68", name: "Pärnumaa" },
    { id: "71", name: "Raplamaa" },
    { id: "74", name: "Saaremaa" },
    { id: "79", name: "Tartumaa" },
    { id: "81", name: "Valgamaa" },
    { id: "84", name: "Viljandimaa" },
    { id: "87", name: "Võrumaa" },
  ];
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="col mt-4" id={1} label="Townland" />
      <div className="mt-4 col-6 col-lg-4 col-md-4 col-sm-6">
        <div className="d-flex w-100">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">County</p>
        </div>
        <Select
          selectClassName="mb-4 w-100"
          options={countyList}
          selectedOption={() => console.log("***data")}
        />
      </div>
      <Input containerClassName="mt-0" id={1} label="Eircode" />
    </div>
  );
}

export function IsleOfManFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-7"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-3 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function IsraelFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Postal code" />
      </div>
    </div>
  );
}

export function ItalyFormComponent() {
  const provinceList = [
    { id: "", name: "- Select -" },
    { id: "AG", name: "Agrigento" },
    { id: "AL", name: "Alessandria" },
    { id: "AN", name: "Ancona" },
    { id: "AO", name: "Aosta" },
    { id: "AR", name: "Arezzo" },
    { id: "AP", name: "Ascoli Piceno" },
    { id: "AT", name: "Asti" },
    { id: "AV", name: "Avellino" },
    { id: "BA", name: "Bari" },
    { id: "BT", name: "Barletta-Andria-Trani" },
    { id: "BL", name: "Belluno" },
    { id: "BN", name: "Benevento" },
    { id: "BG", name: "Bergamo" },
    { id: "BI", name: "Biella" },
    { id: "BO", name: "Bologna" },
    { id: "BZ", name: "Bolzano" },
    { id: "BS", name: "Brescia" },
    { id: "BR", name: "Brindisi" },
    { id: "CA", name: "Cagliari" },
    { id: "CL", name: "Caltanissetta" },
    { id: "CB", name: "Campobasso" },
    { id: "CE", name: "Caserta" },
    { id: "CT", name: "Catania" },
    { id: "CZ", name: "Catanzaro" },
    { id: "CH", name: "Chieti" },
    { id: "CO", name: "Como" },
    { id: "CS", name: "Cosenza" },
    { id: "CR", name: "Cremona" },
    { id: "KR", name: "Crotone" },
    { id: "CN", name: "Cuneo" },
    { id: "EN", name: "Enna" },
    { id: "FM", name: "Fermo" },
    { id: "FE", name: "Ferrara" },
    { id: "FI", name: "Firenze" },
    { id: "FG", name: "Foggia" },
    { id: "FC", name: "Forlì-Cesena" },
    { id: "FR", name: "Frosinone" },
    { id: "GE", name: "Genova" },
    { id: "GO", name: "Gorizia" },
    { id: "GR", name: "Grosseto" },
    { id: "IM", name: "Imperia" },
    { id: "IS", name: "Isernia" },
    { id: "AQ", name: "L'Aquila" },
    { id: "SP", name: "La Spezia" },
    { id: "LT", name: "Latina" },
    { id: "LE", name: "Lecce" },
    { id: "LC", name: "Lecco" },
    { id: "LI", name: "Livorno" },
    { id: "LO", name: "Lodi" },
    { id: "LU", name: "Lucca" },
    { id: "MC", name: "Macerata" },
    { id: "MN", name: "Mantova" },
    { id: "MS", name: "Massa-Carrara" },
    { id: "MT", name: "Matera" },
    { id: "ME", name: "Messina" },
    { id: "MI", name: "Milano" },
    { id: "MO", name: "Modena" },
    { id: "MB", name: "Monza e Brianza" },
    { id: "NA", name: "Napoli" },
    { id: "NO", name: "Novara" },
    { id: "NU", name: "Nuoro" },
    { id: "OR", name: "Oristano" },
    { id: "PD", name: "Padova" },
    { id: "PA", name: "Palermo" },
    { id: "PR", name: "Parma" },
    { id: "PV", name: "Pavia" },
    { id: "PG", name: "Perugia" },
    { id: "PU", name: "Pesaro e Urbino" },
    { id: "PE", name: "Pescara" },
    { id: "PC", name: "Piacenza" },
    { id: "PI", name: "Pisa" },
    { id: "PT", name: "Pistoia" },
    { id: "PN", name: "Pordenone" },
    { id: "PZ", name: "Potenza" },
    { id: "PO", name: "Prato" },
    { id: "RG", name: "Ragusa" },
    { id: "RA", name: "Ravenna" },
    { id: "RC", name: "Reggio Calabria" },
    { id: "RE", name: "Reggio Emilia" },
    { id: "RI", name: "Rieti" },
    { id: "RN", name: "Rimini" },
    { id: "RM", name: "Roma" },
    { id: "RO", name: "Rovigo" },
    { id: "SA", name: "Salerno" },
    { id: "SS", name: "Sassari" },
    { id: "SV", name: "Savona" },
    { id: "SI", name: "Siena" },
    { id: "SR", name: "Siracusa" },
    { id: "SO", name: "Sondrio" },
    { id: "SU", name: "Sud Sardegna" },
    { id: "TA", name: "Taranto" },
    { id: "TE", name: "Teramo" },
    { id: "TR", name: "Terni" },
    { id: "TO", name: "Torino" },
    { id: "TP", name: "Trapani" },
    { id: "TN", name: "Trento" },
    { id: "TV", name: "Treviso" },
    { id: "TS", name: "Trieste" },
    { id: "UD", name: "Udine" },
    { id: "VA", name: "Varese" },
    { id: "VE", name: "Venezia" },
    { id: "VB", name: "Verbano-Cusio-Ossola" },
    { id: "VC", name: "Vercelli" },
    { id: "VR", name: "Verona" },
    { id: "VV", name: "Vibo Valentia" },
    { id: "VI", name: "Vicenza" },
    { id: "VT", name: "Viterbo" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Province</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={provinceList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function JamaicaFormComponent() {
  const provinceList = [
    { id: "", name: "- Select -" },
    { id: "13", name: "Clarendon" },
    { id: "09", name: "Hanover" },
    { id: "01", name: "Kingston" },
    { id: "12", name: "Manchester" },
    { id: "04", name: "Portland" },
    { id: "02", name: "St. Andrew" },
    { id: "06", name: "St. Ann" },
    { id: "14", name: "St. Catherine" },
    { id: "11", name: "St. Elizabeth" },
    { id: "08", name: "St. James" },
    { id: "05", name: "St. Mary" },
    { id: "03", name: "St. Thomas" },
    { id: "07", name: "Trelawny" },
    { id: "10", name: "Westmoreland" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input
        containerClassName="col mt-4"
        id={1}
        label="City"
        isImportant="true"
      />
      <div className="row mx-0 mt-4 gap-3">
        <div className="col px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Parish</p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={provinceList}
            selectedOption={() => console.log("***data")}
          />
        </div>
        <Input
          containerClassName="col"
          id={1}
          label="Cedex"
          isImportant="true"
        />
      </div>
    </div>
  );
}

export function JapanFormComponent() {
  const provinceList = [
    { id: "", name: "- Select -" },
    { id: "01", name: "Hokkaido" },
    { id: "02", name: "Aomori" },
    { id: "03", name: "Iwate" },
    { id: "04", name: "Miyagi" },
    { id: "05", name: "Akita" },
    { id: "06", name: "Yamagata" },
    { id: "07", name: "Fukushima" },
    { id: "08", name: "Ibaraki" },
    { id: "09", name: "Tochigi" },
    { id: "10", name: "Gunma" },
    { id: "11", name: "Saitama" },
    { id: "12", name: "Chiba" },
    { id: "13", name: "Tokyo" },
    { id: "14", name: "Kanagawa" },
    { id: "15", name: "Niigata" },
    { id: "16", name: "Toyama" },
    { id: "17", name: "Ishikawa" },
    { id: "18", name: "Fukui" },
    { id: "19", name: "Yamanashi" },
    { id: "20", name: "Nagano" },
    { id: "21", name: "Gifu" },
    { id: "22", name: "Shizuoka" },
    { id: "23", name: "Aichi" },
    { id: "24", name: "Mie" },
    { id: "25", name: "Shiga" },
    { id: "26", name: "Kyoto" },
    { id: "27", name: "Osaka" },
    { id: "28", name: "Hyogo" },
    { id: "29", name: "Nara" },
    { id: "30", name: "Wakayama" },
    { id: "31", name: "Tottori" },
    { id: "32", name: "Shimane" },
    { id: "33", name: "Okayama" },
    { id: "34", name: "Hiroshima" },
    { id: "35", name: "Yamaguchi" },
    { id: "36", name: "Tokushima" },
    { id: "37", name: "Kagawa" },
    { id: "38", name: "Ehime" },
    { id: "39", name: "Kochi" },
    { id: "40", name: "Fukuoka" },
    { id: "41", name: "Saga" },
    { id: "42", name: "Nagasaki" },
    { id: "43", name: "Kumamoto" },
    { id: "44", name: "Oita" },
    { id: "45", name: "Miyazaki" },
    { id: "46", name: "Kagoshima" },
    { id: "47", name: "Okinawa" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="City" />
        <div className="col px-0">
          <div className="d-flex">
            <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">
              Prefecture
            </p>
            <span className="text-danger">*</span>
          </div>
          <Select
            selectClassName="mb-4 w-100"
            options={provinceList}
            selectedOption={() => console.log("***data")}
          />
        </div>
      </div>
      <Input containerClassName="" id={1} label="Postal code" />
    </div>
  );
}

export function JerseyFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant={true}
        />
      </div>
    </div>
  );
}

export function JordanFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
        <Input containerClassName="col" id={1} label="Postal code" />
      </div>
    </div>
  );
}

export function KazakhstanFormComponent() {
  const provinceList = [
    { id: "", name: "- None -" },
    { id: "10", name: "Abai Region" },
    { id: "11", name: "Akmola Region" },
    { id: "15", name: "Aktobe Region" },
    { id: "75", name: "Almaty" },
    { id: "19", name: "Almaty Region" },
    { id: "71", name: "Astana" },
    { id: "23", name: "Atyrau Region" },
    { id: "63", name: "East Kazakhstan Region" },
    { id: "31", name: "Jambyl Region" },
    { id: "33", name: "Jetisu Region" },
    { id: "35", name: "Karaganda Region" },
    { id: "39", name: "Kostanay Region" },
    { id: "43", name: "Kyzylorda Region" },
    { id: "47", name: "Mangystau Region" },
    { id: "59", name: "North Kazakhstan Region" },
    { id: "55", name: "Pavlodar Region" },
    { id: "79", name: "Shymkent" },
    { id: "61", name: "Turkistan Region" },
    { id: "62", name: "Ulytau Region" },
    { id: "27", name: "West Kazakhstan Region" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Middle name" />
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Postal code"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Region</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={provinceList}
          selectedOption={() => console.log("***data")}
        />
      </div>
    </div>
  );
}

export function KenyaFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-5" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-7"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
      <div className="row mx-0">
        <Input
          containerClassName="mt-4 col-9 col-lg-3 col-md-4 col-sm-9"
          id={1}
          label="Postal code"
        />
      </div>
    </div>
  );
}

export function KiribatiFormComponent() {
  const provinceList = [
    { id: "", name: "- Select -" },
    { id: "G", name: "Gilbert Islands" },
    { id: "L", name: "Line Islands" },
    { id: "P", name: "Phoenix Islands" },
  ];

  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="mt-4 col-8 col-lg-5 col-md-5 col-sm-8">
        <div className="d-flex">
          <p className="m-0 p-0 mb-1 text-dark ms-0 label-input">Island</p>
          <span className="text-danger">*</span>
        </div>
        <Select
          selectClassName="mb-4"
          options={provinceList}
          selectedOption={() => console.log("***data")}
        />
      </div>
      <Input containerClassName="col" id={1} label="City" isImportant="true" />
    </div>
  );
}

export function KosovoFormComponent() {
  return (
    <div className="my-4">
      <div className="row mx-0 px-0 mt-0 d-flex justify-content-start gap-3">
        <Input
          containerClassName="col"
          id={1}
          label="First name"
          isImportant="true"
        />
        <Input
          containerClassName="col"
          id={1}
          label="Last name"
          isImportant="true"
        />
      </div>
      <Input containerClassName="mt-4" id={1} label="Organization" />
      <Input
        containerClassName="mt-4"
        id={1}
        label="Street address"
        isImportant="true"
      />
      <Input containerClassName="mt-0" id={1} label="" />
      <Input containerClassName="mt-0" id={1} label="" />
      <div className="row mx-0 mt-4 gap-3">
        <Input containerClassName="col" id={1} label="Postal code" />
        <Input
          containerClassName="col"
          id={1}
          label="City"
          isImportant="true"
        />
      </div>
    </div>
  );
}
