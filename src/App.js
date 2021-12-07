import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [texts, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = +count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > texts.length) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>password:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generator
        </button>
      </form>
      <article className='lorem-text'>
        {texts.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
