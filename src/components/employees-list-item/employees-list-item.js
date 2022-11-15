import { useState } from 'react';
import './employees-list-item.css';

const EmployeesListItem = ({name, salary}) => {
    const [increase, setIncrease] = useState(false)

    const isIncrease = () => {
        setIncrease(() => !increase)
    }

    return (
        <li className={increase ? 'list-group-item d-flex justify-content-between increase' : "list-group-item d-flex justify-content-between"}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={isIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;