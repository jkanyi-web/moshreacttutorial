/** @format */

import { useState } from "react";

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  
  let countries = [
    'SanFrancisco',
    'NewYork',
    'LosAngeles',
    'Chicago',
    'Houston',
  ];

  return (
    <>
      <h1>List</h1>
      {countries.length === 0 && <p>No countries found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={index}
            onClick={() => {setSelectedIndex(index)}}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
