import React from "react";
import SidebarItem from '../components/SidebarItem.js'


function Sidebar(props) {
  const names = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 и более']
  const values = [4, 0, 1, 2, 3]
  

  let idx = 0;
  return (
    <div className="Sidebar">
      <div className="Sidebar-header">Количество пересадок</div>
      <form>
        {names.map((option)=>{
          idx++;
          return (
            <SidebarItem
            
            key = {idx-1} 
            name = {names[idx-1]}
            value = {values[idx-1]}
            />
          )
        })}

      </form>
      
    </div>
  );
}

export default Sidebar;
