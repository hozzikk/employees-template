import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        name='name'
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}
                        value={name}/>
                    <input type="number"
                        name='salary'
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}
                        value={salary}/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => this.onSubmit(e)}>Добавить</button>
                </form>
            </div>
       )
    }
}

export default EmployeesAddForm;