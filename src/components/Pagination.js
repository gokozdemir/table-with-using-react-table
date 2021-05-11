import React from 'react'

export const Pagination = ({pageIndex, pageOptions, gotoPage, previousPage, nextPage, canPreviousPage, canNextPage, pageCount}) => {
    return (
        <div className="btn-group-sm d-flex align-items-center justify-content-between flex-wrap">
            <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1} onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }} style={{ width: '50px' }} />
                </span>
            </div>


            <div>
                <button onClick={() => gotoPage(1)} className="btn btn-sm btn-primary m-1" disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} className="btn btn-sm btn-primary m-1" disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} className="btn btn-sm btn-primary m-1" disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} className="btn btn-sm btn-primary m-1" disabled={!canNextPage}>{'>>'}</button>
            </div>

        </div>
    )
}
