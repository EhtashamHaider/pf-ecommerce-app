import React from 'react'

export default function InputComponent({type,label,id,value,setValue}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} className='form-control' id={id} value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}
