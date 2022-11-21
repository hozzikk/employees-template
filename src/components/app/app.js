import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Ilya K.', salary: 800, id: 1},
        {name: 'Olga R.', salary: 3300, id: 2},
        {name: 'Denis D.', salary: 1700, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const id = this.state.data.length + 1;

    const person = {
      name: name,
      salary: salary,
      id: id
    }

    this.setState(({data}) => {
      return {
        data: [...data, person]
      }
    })
  }

  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            deleteItem={this.deleteItem}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
