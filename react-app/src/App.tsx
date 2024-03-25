/** @format */

import './App.css';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
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

  return (
    <div>
      {/* <ListGroup countries={countries} heading='Countries' onSelectCountry={handleSelectCountry} /> */}
      <Alert>
        Hello <span>User</span>
      </Alert>
    </div>
  );
}

export default App;
