import React, { useState } from 'react';

import countryList from '../resources/countryList';
import Select from '../components/select/Select';
import CountryForm from '../views/countryForm/CountryForm';

export default function MainContainer() {

    const [selectedOption, setSelectedOption] = useState(0);

    function convertCountriesToObjects(countryList) {
        return countryList.map((country, index) => ({
            id: index,
            name: country?.toLowerCase()
        }))
    }

    const convertedList = convertCountriesToObjects(countryList);

    return (
        <div className='main-container row mx-0 d-flex align-items-center'>
            <div className='col-12 col-lg-8 col-md-8 col-sm-12 shadow mx-3 my-5 px-4 fw-bold fs-6 gray-color border'>
                {console.log('***convertedList', convertedList)}
                <div className='m-3 mb-5'>Address</div>
                <div className='row mx-0'>
                    <p className='m-0 p-0 mb-1 text-dark'>Country</p>
                    <Select selectClassName='mb-4 col-3' options={convertedList} selectedOption={(option) => setSelectedOption(option)} />
                </div>
                <div className='row mx-0'>
                    <div className='col-12 col-lg-8 col-md-9 col-sm-12 px-0'>
                        <CountryForm selectedCountry={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
