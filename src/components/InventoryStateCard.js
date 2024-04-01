
function InventoryStateCard({icon,label,value}) {
  return (
    <>
    <div style={{backgroundColor:"rgba(0,255,255,0.1)",margin:"1rem",height:"6rem", width:"100%",borderRadius:"15px"}}>
      <div style={{display:"flex", justifyContent:"space-around", paddingTop:"1.6rem"}}>
        <div>{icon}</div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"baseline"}}>
          <div style={{fontSize:"15px"}}>{label}</div>
          <div>{value}</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default InventoryStateCard;
