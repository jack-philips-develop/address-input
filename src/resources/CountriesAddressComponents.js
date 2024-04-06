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