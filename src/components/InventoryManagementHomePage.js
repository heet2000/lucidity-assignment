import * as React from 'react';
import { cardsInfo } from "../constant.js/cardConstant";
import Header from "./Header";
import InventoryStateCard from "./InventoryStateCard"
import InventoryStateTable from "./InventoryStateTable"

function App() {
  const [checked, setChecked] = React.useState(true);
  return (
    <>
      <Header checked={checked} setChecked={setChecked}/>
      <div className="App">
      <h3>Inventory stats </h3>
        <div style={{display:"flex"}}>
          {cardsInfo?.map(card=>{
            return(
              <InventoryStateCard icon={card?.icon} label={card?.label} value={card?.value}/>
              )
            })}
        </div>
        <InventoryStateTable checked={checked}/>
      </div>
    </>
  );
}

export default App;
