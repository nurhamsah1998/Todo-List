import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

export default function Todo() {
  const [value, setValue] = useState('');
  const [edit, setEdit] = useState({});
  const [db, setDb] = useState({});

  function server() {
    axios.get('http://localhost:8000/posts').then((res) => {
      setDb(res.data);
    });
  }
  useEffect(() => {
    server();
  }, []);

  function update(i) {
    const schema = {
      id: 1 + Math.random(),
      name: i.name,
    };
    axios.patch('http://localhost:8000/posts/' + i._id, schema).then((res) => {
      server();
    });
    console.log(i);
  }

  function e(e) {
    e.preventDefault();
    const schema = {
      id: 1 + Math.random(),
      name: value,
    };
    axios.post('http://localhost:8000/posts', schema).then((res) => {
      server();
    });
  }
  function del(e) {
    axios.delete('http://localhost:8000/posts/' + e._id).then((res) => {
      server();
    });
  }
  return (
    <div className="m-10">
      <form onSubmit={e}>
        <input value={value} onChange={(e) => setValue(e.target.value)} className="border-2 p-2 w-[300px] border-emerald-500" placeholder="what do ypu wanna work with?" />
        <button className="p-2 ml-2 bg-emerald-500 font-bold text-white">ADD</button>
      </form>
      <div>
        <List x={update} del={del} list={db} />
      </div>
    </div>
  );
}
