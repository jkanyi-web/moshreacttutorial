/** @format */

import './App.css';
import ListGroup from './components/ListGroup';


function App() {
  let countries = [
    'SanFrancisco',
    'NewYork',
    'LosAngeles',
    'Chicago',
    'Houston',
  ];

  return (
    <div>
      <ListGroup countries={countries} heading='Countries' />
    </div>
  );
}

export default App;
