import React from 'react'

export const Options = ({pageSize, setPageSize}) => {
    return (
        <div className="input-group mb-3 w-auto">
            <select className="form-select" id="inputGroupSelect02" value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                {
                    [10, 20, 30].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
        </div>
    )
}
