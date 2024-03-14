import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {randomId} from '@mui/x-data-grid-generator';
import {orderData} from '../../data/mockData';
import Navbar from '../Navbar/Navbar';


function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', category: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add order
      </Button>
    </GridToolbarContainer>
  );
}

export default function Orders() {

  const getRowHeight = () => {
    // Return the fixed height for each row
    return 100; // Height in pixels
  };
  //const [data, setData] = useState(orderData);
  const [rows, setRows] = React.useState(orderData);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'image', headerName: 'Image', width: 150, renderCell: (params) => (<img src={params.value} alt="user" style={{width: '50px', height: '50px', borderRadius: '50%'}}/>)},
    {
      field:'id',
      headerName:'Order Id',
      type:'string',
      flex:1
    },
    { 
      field: 'name',
      headerName: 'Name',
      type:'string',
      flex:1,
      editable: true 
    },
    {
      field: 'date',
      headerName: 'Order Date',
      type: 'date',
      flex:1,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'singleSelect',
      valueOptions: ["Pending","Delivered","Shipped"],
      flex:1,
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box className='product-container'>
      <Navbar/>
    <Box
    className='product-table'
    // p="20px "
    // m="40px 0 0 0"
    height="92vh"
    sx={{
      "& .MuiDataGrid-root": {
        border: "none",
      },
      // "& .MuiDataGrid-row":{
      //   padding:"20px 10px ",
      // },
      "& .MuiDataGrid-cell": {
        // borderBottom: "none",
      },
      "& .name-column--cell": {
        color: "#2e7c67",
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#386cd9",
        // borderBottom: "none",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: "#f2f0f0",
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: "#386cd9",
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
        rows={rows || []}
        getRowId={(row) => row.id}
        columns={columns}
        // components={{ Toolbar: GridToolbar }}
        // checkboxSelection
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
        getRowHeight={getRowHeight}
      />
    </Box>
    </Box>
  );
}