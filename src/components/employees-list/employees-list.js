import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, deleteItem}) => {

    const elements = data.map((item, i) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                {...itemProps} 
                key={i}
                deleteItem={() => deleteItem(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;