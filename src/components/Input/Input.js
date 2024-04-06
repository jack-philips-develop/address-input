import clsx from 'clsx'
import React from 'react'

export default function Input({containerClassName, id, label, isImportant}) {
  return (
    <div class={clsx(containerClassName, "form-group px-0")}>
      <label className='text-dark label-input' for={id}>{label}</label>
      {isImportant && <span className='text-danger'>*</span>}
      <input type="text" class="form-control rounded-0 border border-secondary select-padding" id={id}
             aria-describedby="emailHelp"/>
    </div>)
}
