import React from 'react'

export const ColumnFilter = ({ column }) => {

    const { filterValue, setFilter } = column
    return (
        <div className="mb-3">
            <input value={filterValue || ''} onChange={e => setFilter(e.target.value)} type="text" className="form-control" placeholder="Search" />
        </div>
    )
}
