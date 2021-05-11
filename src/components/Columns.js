import {format} from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Id ',
        Footer: 'Id ',
        accessor: 'id',
        disableSortBy: true,
    },
    {
        Header: 'First Name ',
        Footer: 'First Name ',
        accessor: 'first_name',
    },
    {
        Header: 'Last Name ',
        Footer: 'Last Name ',
        accessor: 'last_name',
        disableSortBy: true,
    },
    {
        Header: 'Date of Birth ',
        Footer: 'Date of Birth ',
        accessor: 'date_of_birth',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyyy')},
        disableSortBy: true,
    },
    {
        Header: 'Country ',
        Footer: 'Country ',
        accessor: 'country',
        disableSortBy: true,
    },
    {
        Header: 'Phone ',
        Footer: 'Phone ',
        accessor: 'phone',
        disableSortBy: true,
    }
]