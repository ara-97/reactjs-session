import React, { useState, Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tableData: [
        {
          name: 'ara',
          roll: 127213
        },
        {
          name: 'ara1',
          roll: 127213
        },
        {
          name: 'ara2',
          roll: 127213
        },
        {
          name: 'ara3',
          roll: 127213
        }
      ],
      name: '',
      roll: ''
    };
  }

  add = () => {
    let arr = this.state.tableData;
    arr.push({ name: this.state.name, roll: this.state.roll });
    this.setState({ tableData: arr, name: '', roll: '' });
  };

  edit = index => {
    this.setState({
      name: this.state.tableData[index].name,
      roll: this.state.tableData[index].roll
    });
  };

  save = index => {
    let arr = this.state.tableData;
    arr[index].name = this.state.name;
    arr[index].roll = this.state.roll;
    this.setState({ tableData: arr });
  };

  doDelete = index => {
    let arr = this.state.tableData;
    arr.splice(index, 1);
    this.setState({ tableData: arr });
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>NAME</td>
              <td>ROLL NO</td>
              <td>EDIT/SAVE</td>
              <td>DELETE</td>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((tData, tIndex) => (
              <tr key={tIndex}>
                <td>{tData.name}</td>
                <td>{tData.roll}</td>
                <td>
                  <button onClick={() => this.edit(tIndex)}>Edit</button>
                  <button onClick={() => this.save(tIndex)}>Save</button>
                </td>
                <td>
                  <button onClick={() => this.doDelete(tIndex)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <input
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
          <input
            placeholder="Roll No"
            name="roll"
            value={this.state.roll}
            onChange={this.onChangeHandler}
          />
          <button className="add" onClick={this.add}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
