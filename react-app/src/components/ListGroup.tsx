/** @format */

import { useState } from 'react';

interface Props {
  countries: string[];
  heading: string;
  onSelectCountry: (country: string) => void;
}

const ListGroup = ({ countries, heading, onSelectCountry }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {countries.length === 0 && <p>No countries found</p>}
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCountry(country);
            }}>
            {country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
