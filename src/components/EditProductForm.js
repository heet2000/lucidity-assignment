import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { IconButton, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

export default function EditProductForm({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open?.isOpen}
        fullWidth={true}
        onClose={handleClose}
      >
        <DialogTitle>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>Edit product</div>
                <IconButton onClick={handleClose}>
                    <Close/>
                </IconButton>
            </div></DialogTitle>
        <DialogContent>
          <DialogContentText>
            
            <div style={{fontSize:"12px"}}>
                {open?.tital}
                </div>
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 1}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <TextField style={{ margin:"1rem"}} id="outlined-basic" label="Category" variant="outlined" />
                    <TextField style={{ margin:"1rem"}} id="outlined-basic" label="Value" variant="outlined" />
                </div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <TextField style={{ margin:"1rem"}} id="outlined-basic" label="Quantity" variant="outlined" />
                    <TextField style={{ margin:"1rem"}} id="outlined-basic" label="Price" variant="outlined" />
                </div>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}