import React from 'react';

function Button({ label }) {
  let className = '';
  return (
    <div>
      <button className="py-4 px-4 bg-emerald-400">{label}</button>
    </div>
  );
}

export default Button;
