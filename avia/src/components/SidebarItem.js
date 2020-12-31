import React from "react";

function SidebarItem ({onSwitch, value, name}) {
    return (
        <div className="Sidebar-item">
            <input
            type="checkbox"
            
            id={`option${value}`}
            name="option1"
            value="All"
            className="Checkbox"
            />
          <label for={`option${value}`}>{name}</label>
        </div>
    )
}

export default SidebarItem;