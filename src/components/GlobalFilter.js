import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 100)
    return (
        <div className="form-floating mb-3">
            <input value={value || ''} onChange={e => {
                setValue(e.target.value)
                onChange(e.target.value)
            }} type="text" className="form-control" id="floatingInput" placeholder="Search" />
            <label htmlFor="floatingInput">Global Search</label>
        </div>
    )
}
