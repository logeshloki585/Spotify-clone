import React from 'react';
import './SideBarOption.css';

function SideBarOption({title, Icon}) {
    return (
        <div  className="sidebaroption">
            {Icon && <Icon className="sidebaroption_Icon"/>}
           { Icon? <h4> {title} </h4> : <p>{title}</p> }
        </div>
    )
}

export default SideBarOption;
