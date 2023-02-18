import React, { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const { total, next } = state;
  const value = next || total || '0';

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  return (
    <div className="container py-5">
      <div className="table-responsive container">
        <table className="table table-bordered border-secondary">
          <tbody>
            <tr className="result">
              <td colSpan={4} className="py-3">{value}</td>
            </tr>
            <tr className="numbers">
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>AC</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>+/-</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>%</button></td>
              <td className="py-3 operator"><button type="button" onClick={handleClick} onKeyDown={handleClick}>÷</button></td>
            </tr>
            <tr className="numbers">
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>7</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>8</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>9</button></td>
              <td className="py-3 operator"><button type="button" onClick={handleClick} onKeyDown={handleClick}>x</button></td>
            </tr>
            <tr className="numbers">
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>4</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>5</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>6</button></td>
              <td className="py-3 operator"><button type="button" onClick={handleClick} onKeyDown={handleClick}>-</button></td>
            </tr>
            <tr className="numbers">
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>1</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>2</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>3</button></td>
              <td className="py-3 operator"><button type="button" onClick={handleClick} onKeyDown={handleClick}>+</button></td>
            </tr>
            <tr className="numbers">
              <td colSpan={2} className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>0</button></td>
              <td className="py-3"><button type="button" onClick={handleClick} onKeyDown={handleClick}>.</button></td>
              <td className="py-3 operator"><button type="button" onClick={handleClick} onKeyDown={handleClick}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
