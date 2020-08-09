import React, { useState } from 'react';

export default function App() {
  // eslint-disable-next-line no-undef
  const [name, setName] = useState('');
  const [roll, setROll] = useState('');
  const [rows, setRows] = useState([
    {
      name: 'aadsa',
      rollNo: '213r'
    },
    {
      name: 'fdnkmls',
      rollNo: '213r'
    },
    {
      name: 'efmlemw',
      rollNo: '213r'
    },
    {
      name: '2ejwnkn',
      rollNo: '213r'
    },
    {
      name: 'gtniorgknfl',
      rollNo: '213r'
    }
  ]);

  const handleInputs = e => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    } else {
      setROll(e.target.value);
    }
  };

  const add = () => {
    rows.push({ name: name, rollNo: roll });
    setName('');
    setROll('');
  };

  const edit = index => {
    setName(rows[index].name);
    setROll(rows[index].rollNo);
  };

  const save = index => {
    if (name && roll) {
      let updatedRows = [...rows];
      updatedRows[index].name = name;
      updatedRows[index].rollNo = roll;
      setRows(updatedRows);
      setName('');
      setROll('');
    }
  };

  const doDelete = index => {
    let updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Roll No</td>
          <td>Edit/Save</td>
          <td>Delete</td>
        </tr>
        {rows.map((r, rIndex) => (
          <tr>
            <td>{r.name}</td>
            <td>{r.rollNo}</td>
            <td>
              <button onClick={() => edit(rIndex)}>Edit</button>
              <button onClick={() => save(rIndex)}>save</button>
            </td>
            <td>
              <button onClick={() => doDelete(rIndex)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <div className="inputs">
        <input
          type="text"
          placeholder="Name"
          name={'name'}
          value={name}
          onChange={handleInputs}
        />
        <input
          type="text"
          placeholder="Roll No"
          name={'roll'}
          value={roll}
          onChange={handleInputs}
        />
        <button className="add" onClick={add}>
          add
        </button>
      </div>
    </div>
  );
}
