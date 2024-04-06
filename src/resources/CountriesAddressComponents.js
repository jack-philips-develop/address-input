import React from 'react'
import Input from '../components/Input/Input'
import Select from '../components/select/Select'

export function AfghanistanFormComponent() {
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
                <Input containerClassName='mt-4 col-7' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-9 col-lg-3 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function AlandIslandsFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function AlbaniaFormComponent() {
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
                <Input containerClassName='mt-4 col-9 col-lg-3 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-7' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function AlgeriaFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function AmericanSamoaFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

const convertedList = [
    { id: 1, name: '- Select -' },
    { id: 2, name: 'Andorra la Vella' },
    { id: 3, name: 'Canillo' },
    { id: 4, name: 'Escaldes-Engordany' },
    { id: 5, name: 'La Massana' },
    { id: 6, name: 'Ordino' },
    { id: 7, name: 'Sant Julia de Loria' },
]

export function AndorraFormComponent() {
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
            <div className='row mx-0 d-flex'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>City</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}

export function AngolaFormComponent() {
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

export function AnguillaFormComponent() {
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
                <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function AntarcticaFormComponent() {
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

export function AntiguaBarbudaFormComponent() {
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

export function ArgentinaFormComponent() {

    const convertedList = [
        { id: 1, name: 'Buenos Aires' },
        { id: 2, name: 'Corrientes' },
        { id: 3, name: 'Entre Ríos' },
        { id: 4, name: 'Mendoza' },
        { id: 5, name: 'San Luis' },
        { id: 6, name: 'Santa Fe' },
        { id: 7, name: 'Salta' },
        { id: 8, name: 'Chaco' },
        { id: 9, name: 'Chubut' },
        { id: 10, name: 'Córdoba' },
        { id: 11, name: 'Formosa' },
        { id: 12, name: 'Jujuy' },
        { id: 13, name: 'La Pampa' },
        { id: 14, name: 'La Rioja' },
        { id: 15, name: 'Misiones' },
        { id: 16, name: 'Neuquén' },
        { id: 17, name: 'Río Negro' },
        { id: 18, name: 'San Juan' },
        { id: 19, name: 'Santa Cruz' },
        { id: 20, name: 'Santiago del Estero' },
        { id: 21, name: 'Tierra del Fuego' },
        { id: 22, name: 'Antarctica and the South Atlantic Islands' },
        { id: 23, name: 'Tucumán' },
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
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0 mt-4'>
                <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}

export function ArmeniaFormComponent() {

    const convertedList = [
        { id: 1, name: 'None' },
        { id: 2, name: 'Aragatsotn' },
        { id: 3, name: 'Ararat' },
        { id: 4, name: 'Armavir' },
        { id: 5, name: 'Gegharkunik' },
        { id: 6, name: 'Kotayk' },
        { id: 7, name: 'Lori' },
        { id: 8, name: 'Shirak' },
        { id: 9, name: 'Syunik' },
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
                <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0 mt-4'>
                <div className='mt-4 col-8 col-lg-4 col-md-4 col-sm-8 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}

export function ArubaFormComponent() {
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

export function AscensionIslandFormComponent() {
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
                <Input containerClassName='mt-4 col-9 col-lg-7 col-md-7 col-sm-9' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function AustraliaFormComponent() {

    const convertedList = [
        { id: 1, name: 'Select' },
        { id: 2, name: 'Australian Capital Territory' },
        { id: 3, name: 'New South Wales' },
        { id: 4, name: 'Northern Territory' },
        { id: 5, name: 'Queensland' },
        { id: 6, name: 'South Australia' },
        { id: 7, name: 'Tasmania' },
        { id: 8, name: 'Victoria' },
        { id: 9, name: 'Western Australia' },
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
            <div className='row mx-0 gap-3'>
                <Input containerClassName='mt-4 col-9 col-lg-6 col-md-6 col-sm-9' id={1} label='Suburb' isImportant='true' />
                <div className='mt-4 col-8 col-lg-5 col-md-5 col-sm-8 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>State</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-9 col-lg-4 col-md-4 col-sm-9' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function AustriaFormComponent() {

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
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function AzerbaijanFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Middle Name' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-4 col-lg-3 col-md-4 col-sm-4' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-8 col-lg-5 col-md-5 col-sm-8' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function BahamasFormComponent() {

    const convertedList = [
        { id: 1, name: 'Select' },
        { id: 2, name: 'Abaco' },
        { id: 3, name: 'Acklins' },
        { id: 4, name: 'Andros' },
        { id: 5, name: 'Berry Islands' },
        { id: 6, name: 'Bimini' },
        { id: 7, name: 'Cat Island' },
        { id: 8, name: 'Crooked Island' },
        { id: 9, name: 'Eleuthera' },
        { id: 10, name: 'Exuma' },
        { id: 11, name: 'Grand Bahama' },
        { id: 12, name: 'Harbour Island' },
        { id: 13, name: 'Inagua' },
        { id: 14, name: 'Long Island' },
        { id: 15, name: 'Mayaguana' },
        { id: 16, name: 'New Providence' },
        { id: 17, name: 'Ragged Island' },
        { id: 18, name: 'Rum Cay' },
        { id: 19, name: 'San Salvador' },
        { id: 20, name: 'Spanish Wells' },
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
            <div className='row mx-0 d-flex'>
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' />
                <div className='mt-4 col-6 col-lg-6 col-md-6 col-sm-6'>
                    <div className='d-flex w-100'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Island</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4 w-100' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}

export function BahrainFormComponent() {
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
                <Input containerClassName='mt-4 col-8 col-lg-7 col-md-7 col-sm-8' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function BangladeshFormComponent() {
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
                <Input containerClassName='mt-4 col-8 col-lg-7 col-md-7 col-sm-8' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function BarbadosFormComponent() {

    const convertedList = [
        { id: 1, name: 'Select' },
        { id: 2, name: 'Christ Church' },
        { id: 3, name: 'Saint Andrew' },
        { id: 4, name: 'Saint George' },
        { id: 5, name: 'Saint James' },
        { id: 6, name: 'Saint John' },
        { id: 7, name: 'Saint Joseph' },
        { id: 8, name: 'Sain Lucky' },
        { id: 9, name: 'Saint Michael' },
        { id: 10, name: 'Saint Peter' },
        { id: 11, name: 'Saint Philip' },
        { id: 12, name: 'Saint Thomas' },
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
            <div className='row mx-0 d-flex'>
                <Input containerClassName='mt-4 col-6 col-lg-8 col-md-8 col-sm-6' id={1} label='City' />
                <div className='mt-4 col-6 col-lg-4 col-md-4 col-sm-6'>
                    <div className='d-flex w-100'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Parish</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4 w-100' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
            <div className='row mx-0'>
                <Input containerClassName=' me-3 col-4 col-lg-4 col-md-4 col-sm-4' id={1} label='Postal code' />
            </div>
        </div>
    )
}

export function BelarusFormComponent() {
    return (
        <div className='my-4'>
            <div className='row mx-0 px-0 d-flex justify-content-start gap-3'>
                <Input containerClassName='col' id={1} label='First name' isImportant='true' />
                <Input containerClassName='col' id={1} label='Middle Name' />
                <Input containerClassName='col' id={1} label='Last name' isImportant='true' />
            </div>
            <Input containerClassName='mt-5' id={1} label='Organization' />
            <Input containerClassName='mt-4' id={1} label='Street address' isImportant='true' />
            <Input containerClassName='mt-0' id={1} label='' />
            <Input containerClassName='mt-0' id={1} label='' />
            <div className='row mx-0'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4 col-6 col-lg-5 col-md-5 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
            <div className='row mx-0'>
                <Input containerClassName='mt-4 col-7' id={1} label='Region' />
            </div>
        </div>
    )
}

export function BelgiumFormComponent() {
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


//! developer : Javad Rahati =>
export function MoldovaFormComponent() {
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

export function MonacoFormComponent() {
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


export function MongoliaFormComponent() {
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
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>

            <div className='row mx-0 px-0 d-flex justify-content-start gap-3 mt-5'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-4 col-sm-6' id={1} label='Province' />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />
            </div>
        </div>
    )
}


export function MontenegroFormComponent() {
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

export function MontserratFormComponent() {
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
                <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function MoroccoFormComponent() {
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

export function MozambiqueFormComponent() {

    const convertedList = [
        { id: 1, name: '-None-' },
        { id: 2, name: 'Cidade De Maputo' },
        { id: 3, name: 'Gaza' },
        { id: 4, name: 'Inhambane' },
        { id: 5, name: 'Manica' },
        { id: 6, name: 'Maputo' },
        { id: 7, name: 'Nampula' },
        { id: 8, name: 'Niassa' },
        { id: 9, name: 'Sofala' },
        { id: 10, name: 'Tele' },
        { id: 11, name: 'Zambezia' },
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
                <Input containerClassName='mt-4 me-2 col-2 col-lg-2 col-md-2 col-sm-6' id={1} label='Postal code' />
                <Input containerClassName='mt-4  me-3 col-6 col-lg-4 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <div className='mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>
                        <span className='text-danger'>*</span>
                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}


export function MyanmarBurmaFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />

            </div>
        </div>
    )
}

export function NamibiaFormComponent() {
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
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />

            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />

         </div>
    )
}

export function NauruFormComponent() {

    const convertedList = [
        { id: 1, name: '-Select-' },
        { id: 2, name: 'Aiwo District' },
        { id: 3, name: 'Anbar District' },
        { id: 4, name: 'Anetan District' },
        { id: 5, name: 'Biati District' },
        { id: 6, name: 'Boe District' },
        { id: 7, name: 'Buada District' },
        { id: 8, name: 'Denigomodu District' },
        { id: 9, name: 'Ewa District' },
        { id: 10, name: 'Ijuw District' },
        { id: 11, name: 'Meneng District' },
        { id: 12, name: 'Nibok District' },
        { id: 13, name: 'Uaboe District' },
        { id: 14, name: 'Yaren District' },

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
            <div className='mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0'>
                <div className='d-flex'>
                    <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>District</p>
                    <span className='text-danger'>*</span>
                </div>
                <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
            </div>

        </div>
    )
}


export function NepalFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' />

            </div>
        </div>
    )
}

export function NetherlandsFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />

            </div>
        </div>
    )
}

export function NewCaledoniaFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' isImportant='true'  />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function NewZealandFormComponent() {
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
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Suburb'   />

            <div className='row mx-0 mt-4'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Town/City' isImportant='true' />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code' isImportant='true'  />
            </div>
        </div>
    )
}

export function NicaraguaFormComponent() {

    const convertedList = [
        { id: 1, name: '-None-' },
        { id: 2, name: 'Boaco' },
        { id: 3, name: 'Carazo' },
        { id: 4, name: 'Chinandega' },
        { id: 5, name: 'Chontales' },
        { id: 6, name: 'Esteli' },
        { id: 7, name: 'Granada' },
        { id: 8, name: 'Jinotega' },
        { id: 9, name: 'Leon' },
        { id: 10, name: 'Madriz' },
        { id: 11, name: 'Managua' },
        { id: 12, name: 'Masaya' },
        { id: 13, name: 'Matagalpa' },
        { id: 14, name: 'Nueva Segovia' },
        { id: 15, name: 'Región Autónoma de la Costa Caribe Norte' },
        { id: 16, name: 'Región Autónoma de la Costa Caribe Sur' },
        { id: 17, name: 'Río San Juan' },
        { id: 18, name: 'Rivas' },
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
            <Input containerClassName='mt-4 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Postal Code'   />

            <div className='row mx-0 mt-4'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <div className='mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Department</p>

                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}

export function NigerFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}


export function NigeriaFormComponent() {

    const convertedList = [
        { id: 1, name: '-None-' },
        { id: 2, name: 'Abia' },
        { id: 3, name: 'Adamawa' },
        { id: 4, name: 'Akwa Ibom' },
        { id: 5, name: 'Anambra' },
        { id: 6, name: 'Bauchi' },
        { id: 7, name: 'Bayelsa' },
        { id: 8, name: 'Benue' },
        { id: 9, name: 'Borno' },
        { id: 10, name: 'Cross River' },
        { id: 11, name: 'Delta' },
        { id: 12, name: 'Ebonyi' },
        { id: 13, name: 'Edo' },
        { id: 14, name: 'Ekiti' },
        { id: 15, name: 'Enugu' },
        { id: 16, name: 'FCT - Abuja' },
        { id: 17, name: 'Gombe' },
        { id: 18, name: 'Imo' },
        { id: 19, name: 'Jigawa' },
        { id: 20, name: 'Kaduna' },
        { id: 22, name: 'Kano' },
        { id: 23, name: 'Katsina' },
        { id: 24, name: 'Kebbi' },
        { id: 25, name: 'Kogi' },
        { id: 26, name: 'Kwara' },
        { id: 27, name: 'Lagos' },
        { id: 28, name: 'Nasarawa' },
        { id: 29, name: 'Niger' },
        { id: 30, name: 'Ogun' },
        { id: 31, name: 'Ondo' },
        { id: 32, name: 'Osun' },
        { id: 33, name: 'Oyo' },
        { id: 35, name: 'Plateau' },
        { id: 36, name: 'Rivers' },
        { id: 37, name: 'Sokoto' },
        { id: 38, name: 'Taraba' },
        { id: 39, name: 'Yobe' },
        { id: 40, name: 'Zamfara' },
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
            <Input containerClassName='mt-4 col-9 col-lg-6 col-md-6 col-sm-9' id={1} label='Suburb'  />
            <div className='row mx-0 mt-4'>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    />
            </div>

            <div className='row mx-0 mt-4'>
                <div className='mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>State</p>

                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
            </div>
        </div>
    )
}
export function NiueFormComponent() {
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
            </div>
        </div>
    )
}

export function NorfolkIslandFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    />
            </div>
        </div>
    )
}

export function NorthKoreaFormComponent() {


    const convertedList = [
        { id: 1, name: '-None-' },
        { id: 2, name: 'Kangwon' },
        { id: 3, name: 'Rason' },
        { id: 4, name: 'Ryanggang' },
        { id: 5, name: 'Chagang' },
        { id: 6, name: 'South Pyongan' },
        { id: 7, name: 'North Pyongan' },
        { id: 8, name: 'Pyongyang' },
        { id: 9, name: 'South Hamgyong' },
        { id: 10, name: 'North Hamgyong' },
        { id: 11, name: 'South Hwanghae' },
        { id: 12, name: 'North Hwanghae' },
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
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />

            <div className='row mx-0'>
                <div className='mt-4 col-3 col-lg-3 col-md-3 col-sm-6 px-0'>
                    <div className='d-flex'>
                        <p className='m-0 p-0 mb-1 text-dark ms-0 label-input'>Province</p>

                    </div>
                    <Select selectClassName='mb-4' options={convertedList} selectedOption={() => console.log('***data')} />
                </div>
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    />
            </div>
        </div>
    )
}


export function NorthMacedoniaFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    />
                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
            </div>
        </div>
    )
}

export function NorthernMarianaIslandsFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Zip code'    isImportant='true' />

            </div>
        </div>
    )
}

export function NorwayFormComponent() {
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
                <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'    isImportant='true' />

                <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='Post Town' isImportant='true' />

            </div>
        </div>
    )
}

export function OmanFormComponent() {
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
            <Input containerClassName='mt-4 me-3 col-6 col-lg-3 col-md-4 col-sm-6' id={1} label='Postal code'   />
            <Input containerClassName='mt-4 me-3 col-6 col-lg-6 col-md-6 col-sm-6' id={1} label='City' isImportant='true' />
        </div>
    )
}
//!  <= developer : Javad Rahati
