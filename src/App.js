import './styles/App.css';
import React, {useState} from 'react';
import dataArray from './array';
import CardContainer from './component/card-container';
import SectionTitle from './component/section-title';

function App() {

  let [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked)
  }
  
  return (
    <div className="App">
      <SectionTitle handleClick={handleClick} checked={checked}/>
      <CardContainer data={dataArray} checked={checked}/>
    </div>
  );
}

export default App;
