import React from 'react';

export default function Table() {
  return (
    <table className="table table-bordered border-secondary">
      <tbody>
        <tr className="result">
          <td colSpan={4} className="py-3">0</td>
        </tr>
        <tr className="numbers">
          <td className="py-3">AC</td>
          <td className="py-3">+/-</td>
          <td className="py-3">%</td>
          <td className="py-3 operator">&divide;</td>
        </tr>
        <tr className="numbers">
          <td className="py-3">7</td>
          <td className="py-3">8</td>
          <td className="py-3">9</td>
          <td className="py-3 operator">&times;</td>
        </tr>
        <tr className="numbers">
          <td className="py-3">4</td>
          <td className="py-3">5</td>
          <td className="py-3">6</td>
          <td className="py-3 operator">-</td>
        </tr>
        <tr className="numbers">
          <td className="py-3">1</td>
          <td className="py-3">2</td>
          <td className="py-3">3</td>
          <td className="py-3 operator">+</td>
        </tr>
        <tr className="numbers">
          <td colSpan={2} className="py-3">0</td>
          <td className="py-3">.</td>
          <td className="py-3 operator">=</td>
        </tr>
      </tbody>
    </table>
  );
}
