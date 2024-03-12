import React,{useState} from 'react'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons, GridToolbar } from "@mui/x-data-grid";
  import {randomId, randomName, randomPrice, randomQuantity} from '@mui/x-data-grid-generator';
import {rawData} from '../data/mockData';
import { Link } from "react-router-dom";
import './products.css';


const initialRows = [
  {
    id: 1,
    name: "ram",
    category: "A",
    price: 100,
    quantity: 100,
  },

];


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', price: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}
const Products = () => {

  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [data, setData] = useState(rawData);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
    
  ];
  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#2e7c67",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#a4a9fc",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f2f0f0",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#a4a9fc",
          },
          "& .MuiCheckbox-root": {
            color: `#1e5245 !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `#141414 !important`,
          },
        }}
      >
        <DataGrid
          // loading={loading || !data}
          getRowId={(row) => row.id}
          rows={data || []}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          editMode="row"
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
}

export default Products