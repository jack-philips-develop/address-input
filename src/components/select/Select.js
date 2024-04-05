import clsx from 'clsx';
import React from 'react';

export default function Select({ options, selectedOption, selectClassName }) {

    const mapCountries = (options) => options?.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
    ))

    return (
        <select onChange={(event) => selectedOption(event.target.value)}
            class={clsx(selectClassName, "rounded-0 select-padding border border-secondary")}
            aria-label="Default select example">

            {mapCountries(options)}
        </select>

    )
}
