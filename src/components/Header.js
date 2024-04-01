import Switch from '@mui/material/Switch';


function Header({checked,setChecked}) {
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
        <div style={{display:"flex"}}>
        <div>Admin</div>
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        <div>User</div>
        </div>
        </>
    );
  }
  
  export default Header;
  