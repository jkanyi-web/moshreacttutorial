/** @format */

import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  
  let countries = [
    'SanFrancisco',
    'NewYork',
    'LosAngeles',
    'Chicago',
    'Houston',
  ];

  const handleSelectCountry = (country: string) => {
    console.log(country);
  }

  const handleClick = () => { 
    console.log('Button clicked')
  };

  return (
    <div>
      {/* <ListGroup countries={countries} heading='Countries' onSelectCountry={handleSelectCountry} /> */}
      {/* <Alert>
        Hello <span>User</span>
      </Alert> */}
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisible(true)} >My Button</Button>
    </div>
  );
}

export default App;
