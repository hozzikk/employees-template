import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, salary, deleteItem, onToggleProp, increase, raising} = props
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase'
    }
    if(raising){
        classNames += ' like'
    }
    return (
        <li className={classNames}>
            <span 
                className='list-group-item-label like'
                onClick={onToggleProp} data-toggle='raising'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm "
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={deleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;