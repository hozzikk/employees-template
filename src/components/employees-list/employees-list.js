import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, deleteItem, onToggleProp}) => {

    const elements = data.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                {...itemProps} 
                key={i}
                deleteItem={() => deleteItem(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;