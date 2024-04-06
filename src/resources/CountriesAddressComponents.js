import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Select from '../components/select/Select'
import { stateList as Brazil_stateList } from "./options/brazil";
import { provinceList as Canada_provinceList } from "./options/canada";
import { islandList as CapeVerde_islandList } from "./options/cape-verde";
import { islandList as CaymanIslands_islandList } from "./options/cayman-islands";
import { provinceList as China_provinceList } from "./options/china";
import { departmentList as Colombia_departmentList } from "./options/colombia";
import { provinceList as CostaRica_provinceList } from "./options/costa-rica";
import { provinceList as Cuba_provinceList } from "./options/cuba";
import { provinceList as Egypt_provinceList } from "./options/egypt";
import { provinceList as ElSalvador_provinceList } from "./options/el-salvador";

export function AfghanistanFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-7' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-3 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
    </div>)
}

export function AlandIslandsFormComponent() {
    return (<div className='mb-4'>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <div className='d-flex mx-0 mt-5 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AlbaniaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-3 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-7' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AlgeriaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AmericanSamoaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

const convertedList = [{ id: 1, name: '- Select -' }, { id: 2, name: 'Andorra la Vella' }, { id: 3, name: 'Canillo' }, {
    id: 4,
    name: 'Escaldes-Engordany'
}, { id: 5, name: 'La Massana' }, { id: 6, name: 'Ordino' }, { id: 7, name: 'Sant Julia de Loria' },]

export function AndorraFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 d-flex'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8'>
                <div className='d-flex'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>City</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
    </div>)
}

export function AngolaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AnguillaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
    </div>)
}

export function AntarcticaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AntiguaBarbudaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function ArgentinaFormComponent() {

    const convertedList = [{ id: 1, name: 'Buenos Aires' }, { id: 2, name: 'Corrientes' }, {
        id: 3,
        name: 'Entre Ríos'
    }, { id: 4, name: 'Mendoza' }, { id: 5, name: 'San Luis' }, { id: 6, name: 'Santa Fe' }, { id: 7, name: 'Salta' }, {
        id: 8,
        name: 'Chaco'
    }, { id: 9, name: 'Chubut' }, { id: 10, name: 'Córdoba' }, { id: 11, name: 'Formosa' }, { id: 12, name: 'Jujuy' }, {
        id: 13,
        name: 'La Pampa'
    }, { id: 14, name: 'La Rioja' }, { id: 15, name: 'Misiones' }, { id: 16, name: 'Neuquén' }, {
        id: 17,
        name: 'Río Negro'
    }, { id: 18, name: 'San Juan' }, { id: 19, name: 'Santa Cruz' }, { id: 20, name: 'Santiago del Estero' }, {
        id: 21,
        name: 'Tierra del Fuego'
    }, { id: 22, name: 'Antarctica and the South Atlantic Islands' }, { id: 23, name: 'Tucumán' },]

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0 mt-4'>
            <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0'>
                <div className='d-flex'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
    </div>)
}

export function ArmeniaFormComponent() {

    const convertedList = [{ id: 1, name: 'None' }, { id: 2, name: 'Aragatsotn' }, { id: 3, name: 'Ararat' }, {
        id: 4,
        name: 'Armavir'
    }, { id: 5, name: 'Gegharkunik' }, { id: 6, name: 'Kotayk' }, { id: 7, name: 'Lori' }, { id: 8, name: 'Shirak' }, {
        id: 9,
        name: 'Syunik'
    },]

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0 mt-4'>
            <div className='mt-4 col-8 col-lg-4 col-md-4 col-sm-8 px-0'>
                <div className='d-flex'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
    </div>)
}

export function ArubaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AscensionIslandFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
    </div>)
}

export function AustraliaFormComponent() {

    const convertedList = [{ id: 1, name: 'Select' }, { id: 2, name: 'Australian Capital Territory' }, {
        id: 3,
        name: 'New South Wales'
    }, { id: 4, name: 'Northern Territory' }, { id: 5, name: 'Queensland' }, { id: 6, name: 'South Australia' }, {
        id: 7,
        name: 'Tasmania'
    }, { id: 8, name: 'Victoria' }, { id: 9, name: 'Western Australia' },]

    return (<div className='my-4'>
        <Input containerClassName='' id={1} label='Organization' />
        <div className='d-flex mx-0 px-0 mt-5 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 gap-3'>
            <Input containerClassName='mt-4 col-9 col-lg-6 col-md-6 col-sm-9' id={1} label='Suburb' isImportant='true' />
            <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0'>
                <div className='d-flex'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>State</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
    </div>)
}

export function AustriaFormComponent() {

    return (<div className='my-4'>
        <Input containerClassName='' id={1} label='Organization' />
        <div className='d-flex mx-0 px-0 mt-5 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function AzerbaijanFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Middle Name' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BahamasFormComponent() {

    const convertedList = [{ id: 1, name: 'Select' }, { id: 2, name: 'Abaco' }, { id: 3, name: 'Acklins' }, {
        id: 4,
        name: 'Andros'
    }, { id: 5, name: 'Berry Islands' }, { id: 6, name: 'Bimini' }, { id: 7, name: 'Cat Island' }, {
        id: 8,
        name: 'Crooked Island'
    }, { id: 9, name: 'Eleuthera' }, { id: 10, name: 'Exuma' }, { id: 11, name: 'Grand Bahama' }, {
        id: 12,
        name: 'Harbour Island'
    }, { id: 13, name: 'Inagua' }, { id: 14, name: 'Long Island' }, { id: 15, name: 'Mayaguana' }, {
        id: 16,
        name: 'New Providence'
    }, { id: 17, name: 'Ragged Island' }, { id: 18, name: 'Rum Cay' }, { id: 19, name: 'San Salvador' }, {
        id: 20,
        name: 'Spanish Wells'
    },]

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 d-flex'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' />
            <div className='mt-4 col-6 col-lg-6 col-md-6 col-sm-6'>
                <div className='d-flex w-100'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Island</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4 w-100' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
    </div>)
}

export function BahrainFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 gap-3'>
            <Input containerClassName='mt-4 col-8 col-lg-7 col-md-7 col-sm-8' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BangladeshFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 gap-3'>
            <Input containerClassName='mt-4 col-8 col-lg-7 col-md-7 col-sm-8' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BarbadosFormComponent() {

    const convertedList = [{ id: 1, name: 'Select' }, { id: 2, name: 'Christ Church' }, { id: 3, name: 'Saint Andrew' }, {
        id: 4,
        name: 'Saint George'
    }, { id: 5, name: 'Saint James' }, { id: 6, name: 'Saint John' }, { id: 7, name: 'Saint Joseph' }, {
        id: 8,
        name: 'Sain Lucky'
    }, { id: 9, name: 'Saint Michael' }, { id: 10, name: 'Saint Peter' }, { id: 11, name: 'Saint Philip' }, {
        id: 12,
        name: 'Saint Thomas'
    },]

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 d-flex'>
            <Input containerClassName='mt-4 col-6 col-lg-8 col-md-8 col-sm-6' id={1} label='City' />
            <div className='mt-4 col-6 col-lg-4 col-md-4 col-sm-6'>
                <div className='d-flex w-100'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Parish</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4 w-100' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName=' me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BelarusFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Middle Name' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-5 col-md-5 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-7' id={1} label='Region' />
        </div>
    </div>)
}

export function BelgiumFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BelizeFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BeninFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BermudaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BhutanFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BoliviaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BosniaHerzegovinaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BotswanaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BouvetIslandFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
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
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Neighborhood' />
        </div>
        <div className='d-flex mx-0'>
            {/* 💥 todo -> implement below select box based on states */}
            <Input containerClassName='mt-4 me-3 col-6 col-lg-4 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            {/* 💚 todo -> implement below select box */}
            <div className={'mt-4 me-3 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='State'
                    isImportant={'true'}
                    options={statesList}
                    selectedOption={(option) => setSelectedState(option)} />
            </div>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                isImportant={'true'} />
        </div>
    </div>)
}

export function BritishIndianOceanTerritoryFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                isImportant={'true'} />
        </div>
    </div>)
}

export function BritishVirginIslandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BruneiFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function BulgariaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Middle Name' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function BurkinaFasoFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Codex' />
        </div>
    </div>)
}

export function BurundiFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CambodiaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function CameroonFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
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
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <div className={'mt-4 me-3 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Province'
                    isImportant={'true'}
                    options={provincesList}
                    selectedOption={(option) => setSelectedProvince(option)} />
            </div>
            <Input containerClassName='mt-4 me-3 col-6 col-lg col-md-4 col-sm-6' id={1} label='Postal code'
                isImportant={'true'} />
        </div>
    </div>)
}

export function CanaryIslandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CapeVerdeFormComponent() {
    const [selectedIsland, setSelectedIsland] = useState(0);

    function convertIslandsToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const islandsList = convertIslandsToObjects(CapeVerde_islandList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <div className={'mt-4 mx-0 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Island'
                    isImportant={'true'}
                    options={islandsList}
                    selectedOption={(option) => setSelectedIsland(option)} />
            </div>
        </div>
    </div>)
}

export function CaribbeanNetherlandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CaymanIslandsFormComponent() {
    const [selectedIsland, setSelectedIsland] = useState(0);

    function convertIslandsToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const islandsList = convertIslandsToObjects(CaymanIslands_islandList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <div className={'mt-4 mx-0 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Island'
                    isImportant={'true'}
                    options={islandsList}
                    selectedOption={(option) => setSelectedIsland(option)} />
            </div>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function CentralAfricanRepublicFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CeutaMelillaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function ChadFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function ChileFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function ChinaFormComponent() {
    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(China_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='District' />
        </div>
        <div className='d-flex mx-0'>
            {/* 💥 todo -> implement below select box by changing province option */}
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            {/* 💚 todo -> implement below select box */}
            <div className={'mt-4 mx-0 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Province'
                    isImportant={'true'}
                    options={provincesList}
                    selectedOption={(option) => setSelectedProvince(option)} />
            </div>
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-6 col-sm-6' id={1} label='Postal code'
                isImportant='true' />
        </div>
    </div>)
}

export function ChristmasIslandFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function ClippertonIslandFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CocosIslandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function ColombiaFormComponent() {
    const [selectedDepartment, setSelectedDepartment] = useState(0);

    function convertDepartmentsToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const departmentsList = convertDepartmentsToObjects(Colombia_departmentList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-5 col-md-4 col-sm-6' id={1} label='City'
                isImportant={'true'} />
            <div className={'mt-4 me-3 col-6 col-lg-5'}>
                <Select selectClassName='mb-4' label='Department'
                    isImportant={'true'}
                    options={departmentsList}
                    selectedOption={(option) => setSelectedDepartment(option)} />
            </div>
            <Input containerClassName='mt-4 col-6 col-lg col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function ComorosFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CongoBrazzavilleFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CongoKinshasaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CookIslandsFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CostaRicaFormComponent() {
    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(CostaRica_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <div className={'mt-4 mx-0 col-6 col-lg-3'}>
                <Select selectClassName='mb-4' label='Province'
                    isImportant={'true'}
                    options={provincesList}
                    selectedOption={(option) => setSelectedProvince(option)} />
            </div>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-2 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function CôteDIvoireFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0 mt-5'>
            <Input containerClassName='col-6 me-3 col-lg-3 col-md-6 col-sm-6' id={1} label='Codex' />
            <Input containerClassName='col-12 col-lg' id={1} label='' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CroatiaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CubaFormComponent() {
    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(Cuba_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            <div className={'mt-4 mx-0 col-6 col-lg-4'}>
                <Select selectClassName='mb-4' label='Province'
                    options={provincesList}
                    selectedOption={(option) => setSelectedProvince(option)} />
            </div>
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-2 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function CuraçaoFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CyprusFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function CzechiaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function DenmarkFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'
                isImportant='true' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function DiegoGarciaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function DjiboutiFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function DominicaFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function DominicanRepublicFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function EcuadorFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function EgyptFormComponent() {
    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(Egypt_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className={'mt-4 mx-0'}>
            <Select selectClassName='mb-4' label='Province'
                isImportant={'true'}
                options={provincesList}
                selectedOption={(option) => setSelectedProvince(option)} />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
        </div>
    </div>)
}

export function ElSalvadorFormComponent() {

    const [selectedProvince, setSelectedProvince] = useState(0);

    function convertProvincesToObjects(list) {
        return list.map((country, index) => ({
            id: index, name: country//?.toLowerCase()
        }))
    }

    const provincesList = convertProvincesToObjects(ElSalvador_provinceList);

    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
        <div className='d-flex mx-0'>
            <div className={'mt-4 mx-0'}>
                <Select selectClassName='mb-4' label='Province'
                    isImportant={'true'}
                    options={provincesList}
                    selectedOption={(option) => setSelectedProvince(option)} />
            </div>
        </div>
    </div>)
}

// 24 - 74

// 75 - 124

// 125 - 176
export function KuwaitFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function KyrgyzstanFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function LaosFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function LatviaFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-3 col-md-3 col-sm-6' id={1} label='Postal Code' isImportant='true' />
            </div>
        </div>
    )
}

export function LebanonFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-3 col-md-3 col-sm-6' id={1} label='Postal Code' />
            </div>
        </div>
    )
}

export function LesothoFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-3 col-md-3 col-sm-6' id={1} label='Postal Code' />
            </div>
        </div>
    )
}

export function LiberiaFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function LibyaFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function LiechtensteinFormComponent() {

    return (
        <div className='my-4'>
            <Input containerClassName='' id={1} label='Organization' />
            <div className='row mx-0 px-0 mt-5 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function LithuaniaFormComponent() {

    return (
        <div className='my-4'>
            <Input containerClassName='' id={1} label='Organization' />
            <div className='row mx-0 px-0 mt-5 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0 gap-3 justify-content-between'>
                <Input containerClassName='mt-4 col-4 col-lg-3 col-md-3 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-4 col-md-4 col-sm-8' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-4 col-md-4 col-sm-8' id={1} label='Country' isImportant='true' />
            </div>
        </div>
    )
}

export function LuxembourgFormComponent() {
    return (
        <div className='mb-4'>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <div className='row mx-0 mt-5 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MacaoSarChinaComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
        </div>
    )
}

export function MadagascarFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MalawiFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0 gap-3'>
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Cedex' />
            </div>
        </div>
    )
}

export function MalaysiaFormComponent() {

    const convertedList = [
        { id: 1, name: 'Johor' },
        { id: 2, name: 'Kedah' },
        { id: 3, name: 'Kelantan' },
        { id: 4, name: 'Kuala Lumpur' },
        { id: 5, name: 'Labuan' },
        { id: 6, name: 'Melaka' },
        { id: 7, name: 'Pahang' },
        { id: 8, name: 'Perak' },
        { id: 9, name: 'Perlis' },
        { id: 10, name: 'Pulau Pinang' },
        { id: 11, name: 'Putrajaya' },
        { id: 12, name: 'Sabah' },
        { id: 13, name: 'Sarawak' },
    ]

    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-12 col-lg-8 col-md-8 col-sm-12' id={1} label='Village/Township' isImportant='true' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0 mt-4'>
                <div className='d-flex px-0'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>state</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4 col-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>
        </div>
    )
}

export function MaldivesFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-3 col-md-3 col-sm-6' id={1} label='Postal Code' />
            </div>
        </div>
    )
}

export function MaliFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MaltaFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-3 col-md-3 col-sm-6' id={1} label='Postal Code' />
            </div>
        </div>
    )
}

export function MarshallIslandsFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0 gap-2'>
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 col-6 col-lg-5 col-md-5 col-sm-6' id={1} label='State' isImportant='true' />
            </div>
            <div className='row mx-0 gap-2 mt-4'>
                <Input containerClassName='mt-4 col-6 col-lg-4 col-md-4 col-sm-6' id={1} label='Zip Code' isImportant='true' />
            </div>
        </div>
    )
}

export function MartiniqueFormComponent() {
    return (
        <div className='mb-4'>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <div className='row mx-0 mt-5 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MauritaniaFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-12 col-lg-7 col-md-7 col-sm-12' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MauritiusFormComponent() {
    return (<div className='my-4'>
        <div className='d-flex mx-0 px-0 d-flex justify-content-start gap-3'>
            <Input containerClassName='col' id={1} label='First name' isImportant='true' />
            <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
        </div>
        <Input containerClassName='mt-5' id={1} label='Organization' />
        <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
        <Input containerClassName='mt-0' id={1} label='' />
        <Input containerClassName='mt-0' id={1} label='' />
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-9 col-lg-3 col-md-4 col-sm-9' id={1} label='Postal code' />
        </div>
        <div className='d-flex mx-0'>
            <Input containerClassName='mt-4 col-7' id={1} label='City' isImportant='true' />
        </div>
    </div>)
}

export function MayotteFormComponent() {
    return (
        <div className='mb-4'>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <div className='row mx-0 mt-5 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MexicoFormComponent() {

    const convertedList = [
        { id: 1, name: 'Aguascalientes' },
        { id: 2, name: 'Baja California' },
        { id: 3, name: 'Baja California Sur' },
        { id: 4, name: 'Campeche' },
        { id: 5, name: 'Coahuila' },
        { id: 6, name: 'Colima' },
        { id: 7, name: 'Chiapas' },
        { id: 8, name: 'Chihuahua' },
        { id: 9, name: 'Durango' },
        { id: 10, name: 'Mexico City' },
        { id: 11, name: 'Guanajuato' },
        { id: 12, name: 'Guerrero' },
        { id: 13, name: 'Hidalgo' },
        { id: 14, name: 'Jalisco' },
        { id: 15, name: 'Mexico' },
        { id: 16, name: 'Michoacan' },
        { id: 17, name: 'Morelos' },
        { id: 18, name: 'Nayarit' },
        { id: 19, name: 'Nuevo León' },
        { id: 20, name: 'Oaxaca' },
        { id: 21, name: 'Puebla' },
        { id: 22, name: 'Queretaro' },
        { id: 23, name: 'Quintana Roo' },
        { id: 24, name: 'San Luis Potosi' },
        { id: 25, name: 'Sinaloa' },
        { id: 26, name: 'Sonora' },
        { id: 27, name: 'Tabasco' },
        { id: 28, name: 'Tamaulipas' },
        { id: 29, name: 'Tlaxcala' },
        { id: 30, name: 'Veracruz' },
        { id: 31, name: 'Yucatán' },
        { id: 32, name: 'Zacatecas' },
    ]

    return (
        <div className='my-4'>
            <Input containerClassName='' id={1} label='Organization' />
            <div className='row mx-0 px-0 mt-5 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='d-flex mx-0'>
                <Input containerClassName='mt-4 col-7' id={1} label='Neighborhood' />
            </div>
            <div className='row mx-0 gap-3'>
                <Input containerClassName='mt-4 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' isImportant='true' />
                <Input containerClassName='mt-4 col-7 col-lg-4 col-md-4 col-sm-7' id={1} label='City' isImportant='true' />
                <div className='mt-4 col-7 col-lg-3 col-md-3 col-sm-7 px-0' >
                    <div className='d-flex px-0'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>State</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}
