import React from 'react';
import { useState } from 'react';

export default function List({ list, x, edit, del }) {
  const [v, setV] = useState({});
  function handleEdit(d) {
    setV(d);
  }
  function sav() {
    x(v);
    setV({});
  }
  return (
    <div>
      {Array.isArray(list)
        ? list.map((i) => {
            if (i._id == v._id) {
              return (
                <div className="mt-5 w-[500px] flex justify-between" key={i._id}>
                  <div>
                    <input onChange={(e) => setV({ _id: i._id, name: e.target.value })} placeholder="enter your modify" className="p-2 w-[300px] outline-none border-b-2 border-emerald-500" />
                  </div>
                  <div>
                    <button onClick={sav} className="py-1 px-2 ml-2 bg-emerald-400 rounded-lg font-bold text-white">
                      Save Change
                    </button>
                  </div>
                </div>
              );
            }
            return (
              <div className="flex justify-between items-center w-[500px] mt-5" key={i._id}>
                <div>
                  <p>{i.name}</p>
                  <p className="text-[15px] text-slate-400">dikirim pada : {i.date}</p>
                </div>

                <div>
                  <button onClick={() => handleEdit(i)} className="py-1 px-2 ml-2 bg-emerald-400 rounded-lg font-bold text-white">
                    Modify
                  </button>
                  <button onClick={() => del(i)} className="py-1 px-2 ml-2 bg-red-500 rounded-lg font-bold text-white">
                    X
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
