import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel} from '@material-ui/data-grid';
import { server_calls } from '../../api'; // ADD THIS
import { useGetData } from '../../custom-hooks'; // ADD THIS
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core'; // ADD THESE
import { CarForm } from '../../components/CarForm';

const columns: GridColDef[] = [
    { 
        field: 'id',
          headerName: 'ID', 
          width: 150,
          editable: true, 
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

  export const DataTable =  () => {
  
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(`${gridData[0]}`)
      getData()
    }
  
      return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel) => {
              setData(newSelectionModel)
            }} 
            selectionModel={gridData}
            {...carData}/>
  
            <Button color='primary' variant='contained' onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
              {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Update Your Car</DialogTitle>
              <DialogContent>
                <DialogContentText>Car:{gridData[0]}</DialogContentText>
                  <CarForm id={`${gridData[0]}`}/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
  }