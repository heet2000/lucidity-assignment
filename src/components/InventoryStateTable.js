import React, {useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { columns } from '../constant.js/tableConstant';
import { fetchInventoryData } from '../fetcher';
import { IconButton } from '@mui/material';
import EditProductForm from './EditProductForm';

export default function ColumnGroupingTable({checked}) {

  const [rows,setRowData]=useState([])
  const [open, setOpen] = React.useState({isOpen:false, tital:""});

  const handleRowData = (val)=>{
    setRowData(val)
  }

  const handleEditForm = (tital) => {
    setOpen({isOpen:true, tital})
  }

  const handleVisibility = (seletedRow) => {
    const editedRows = rows.map(row=>{
      if(row?.name===seletedRow?.name){
        return{...row,disabled : !row?.disabled}
      }
      return row
    })
    setRowData(editedRows)
  }

  useEffect(()=>{
    fetchInventoryData(handleRowData)
  },[])

  return (
    <Paper style={{backgroundColor:"transparent"}} sx={{ width: '100%' }}>
      <EditProductForm open={open} setOpen={setOpen}/>
      <TableContainer style={{backgroundColor:"transparent"}} sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableRow style={{backgroundColor:"transparent"}}>
              {columns.map((column) => (
                <TableCell
                  key={columns.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth ,color:"yellow" }}
                >
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
                      "width": "4rem",
                      "height":"1.5rem",
                      "justifyContent": "center",
                      "alignItems":"center",
                      "display": "flex",
                      "borderRadius": "15%"}}>
                  {column.label}
                </div>
                </TableCell>
              ))}
          </TableRow>
          <TableBody style={{backgroundColor:"transparent"}}>
            {rows?.length===0 && "No Data Found"}
            {rows?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      return (
                        <TableCell style={{color:"white"}} key={column.id} align={column.align}>
                          {column?.id==="action"?
                          <>
                            <IconButton size='small' disabled={checked} onClick={()=>handleEditForm(row["name"])}>
                              <EditIcon style={{color:(checked||row?.["disabled"])?"gray":'green'}}/>
                            </IconButton>
                            <IconButton size='small' disabled={checked} onClick={()=>handleVisibility(row)}>
                              {row?.["disabled"]?<VisibilityOffIcon style={{color:'purple'}}/>:<VisibilityIcon style={{color:checked?"gray":'purple'}}/>}
                            </IconButton>
                            <IconButton size='small' disabled={checked}>
                              <DeleteIcon style={{color:checked?"gray":'red'}}/>
                            </IconButton>
                            </>:<p style={{color: row?.["disabled"]?"gray":"white"}}>{row?.[column?.id]}</p>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}