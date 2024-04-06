import clsx from 'clsx';
import React from 'react';

export default function Select({options, selectedOption, selectClassName, label, isImportant}) {

  const mapCountries = (options) => options?.map(item => (
    <option key={item.id} value={item.id}>{item.name}</option>
  ))

  return (
    <div className={clsx(selectClassName, "")}>
      <p className='m-0 p-0 mb-0 text-dark'>
        {label}
        {isImportant && <span className='text-danger'>*</span>}
      </p>
      <select onChange={(event) => selectedOption(event.target.value)}
              className={clsx(selectClassName, "bg-white rounded-0 select-padding border border-secondary")}
              aria-label="Default select example">

        {mapCountries(options)}
      </select>
    </div>
  )
}
