import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import { Checkbox } from './Checkbox'
import { Options } from './Options'
import { Pagination } from './Pagination'

function BasicTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({
        columns,
        data,
        defaultColumn
    }, useFilters, useGlobalFilter, useSortBy, usePagination, useRowSelect, (hooks) => {
        hooks.visibleColumns.push(
            (columns) => {
                return [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        )
                    },
                    ...columns
                ]
            }
        )
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        selectedFlatRows,
        setGlobalFilter,
        allColumns,
        getToggleHideAllColumnsProps,
    } = tableInstance

    const { globalFilter } = state
    const { pageIndex, pageSize } = state

    return (
        <div className="container min-vh-100 p-5">
            <div className="card w-100 mt-3 mb-3">
                <div className="card-header">
                    <h1>List Of Users</h1>
                </div>
                <div className="card-body table-responsive">

                    <div className="row m-3 border border-2 p-3">
                        <div className="col">
                            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
                        </div>
                        {
                            allColumns.map(column => {
                                if (column.id === 'selection') return ''
                                return (
                                    <div key={column.id} className="col w-25">
                                        <input type="checkbox" {...column.getToggleHiddenProps()} id="checkbox" />{' '}
                                        {column.Header}
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 p-3">
                        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

                        <Options pageSize={pageSize} setPageSize={setPageSize} />
                    </div>

                    <table {...getTableProps()} className="table table-striped table-hover text-center mt-4">
                        <caption>List of users</caption>
                        <thead className="table-light p-4">
                            {headerGroups.map((headerGroup, index) => (
                                <tr key={index} {...headerGroup.getHeaderGroupProps()} className="p-5 font-weight-bold">
                                    {headerGroup.headers.map((column, index) => (
                                        <th key={index} {
                                            ...column.getHeaderProps(column.getSortByToggleProps())
                                        }>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>) : ''}
                                            </span>
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, index) => {
                                prepareRow(row)
                                return (
                                    <tr key={index} {...row.getRowProps()} className="align-middle">
                                        {row.cells.map((cell, index) => {
                                            return <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot className="table-dark">
                            {
                                footerGroups.map((footerGroup, index) => (
                                    <tr key={index} {...footerGroup.getFooterGroupProps()}>
                                        {
                                            footerGroup.headers.map((column, index) => (
                                                <td key={index} {...column.getFooterProps}>
                                                    {
                                                        column.render('Footer')
                                                    }
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tfoot>
                    </table>

                    <Pagination pageIndex={pageIndex} pageOptions={pageOptions} gotoPage={gotoPage} previousPage={previousPage} nextPage={nextPage} canPreviousPage={canPreviousPage} canNextPage={canNextPage} pageCount={pageCount} />
                    <br />
                    <pre>
                        <code>
                            {
                                JSON.stringify(
                                    {
                                        selectedFlatRows: selectedFlatRows.map((row) => row.original),
                                    },
                                    null,
                                    2
                                )
                            }
                        </code>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default BasicTable
