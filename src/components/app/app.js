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
        {name: 'Ilya K.', salary: 800, increase: false, raising: true,  id: 1},
        {name: 'Olga R.', salary: 3300, increase: true,  raising: false, id: 2},
        {name: 'Denis D.', salary: 1700, increase: false, raising: false, id: 3}
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
      increase: false,
      raising: false,
      id: id
    }

    this.setState(({data}) => {
      return {
        data: [...data, person]
      }
    })
  }


  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};

    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      
    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }

        return item;
      })
    }))
  }

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, raising: !item.raising}
  //       }

  //       return item
  //     })
  //   }))
  // }

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length
    return (
      <div className="app">
          <AppInfo 
            employees={employees} 
            increased={increased} />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={this.state.data}
            deleteItem={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
