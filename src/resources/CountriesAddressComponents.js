import React from 'react'
import Input from '../components/Input/Input'

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