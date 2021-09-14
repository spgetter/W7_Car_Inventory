import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { 
        field: 'id',
         headerName: 'ID', 
         width: 50, 
    },
    { 
        field: 'make',
         headerName: 'MAKE', 
         width: 150,
         editable: true, 
    },
    {
        field: 'model',
        headerName: 'MODEL',
        width: 150,
        editable: true,
    },
    {
        field: 'year',
        headerName: 'YEAR',
        width: 100,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'PRICE ($)',
        type: 'number',
        width: 100,
        editable: true,
    },
    {
        field: 'seats',
        headerName: 'SEATS',
        width: 100,
        editable: true
    },
    {
        field: 'transmission',
        headerName: 'TRANSMISSION',
        width: 100,
        editable: true
    },
    {
        field: 'engine',
        headerName: 'ENGINE',
        width: 150,
        editable: true
    },
    {
        field: 'dimensions',
        headerName: 'DIMENSIONS (in)',
        width: 150,
        editable: true
    },
    {
        field: 'weight',
        headerName: 'WEIGHT',
        width: 100,
        editable: true
    },
    {
        field: 'MSRP',
        headerName: 'MSRP',
        width: 100,
        editable: true
    },
  ];


const rows = [
   {
        id: 1,
        make: "Chevrolet",
        model: "El Camino",
        year: "1980",
        price: 2500.00,
        seats: "cloth",
        transmission: "manual",
        engine: "Buick 3.1l",
        dimensions: "72w 55h 202l",
        weight: "3428.2 lb",
        MSRP: 5911.00
    },
    {
        id: 2,
        make : "Ford",
        model : "Maverick",
        year : "1973",
        price : 300.00,
        seats : "cloth",
        transmission : "automatic",
        engine : "200 CID I6",
        dimensions : "70w 53w 179l",
        weight : "2909 lb",
        MSRP : 2248.00
    },
    {
        id: 3,
        make : "Ford",
        model : "Pinto Wagon",
        year : "1974",
        price : 50.00,
        seats : "cloth",
        transmission : "automatic",
        engine : "122 CID V4",
        dimensions : "70w 52h 179l",
        weight : "2576 lb",
        MSRP : 2770.00
    },
    {
        id: 4,
        make : "Mercedes Benz",
        model : "GL350 Bluetec",
        year : "2010",
        price : 21080.42,
        seats : "leather",
        transmission : "automatic",
        engine : "3.0l V6 Diesel",
        dimensions : "76w 72h 200l",
        weight : "5423 lb",
        MSRP : 59950.00
    }
]

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Thrones In Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}