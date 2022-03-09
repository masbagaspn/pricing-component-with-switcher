import './styles/App.css';
import React, {useState} from 'react';
import dataArray from './array';
import CardContainer from './component/card-container';
import SectionTitle from './component/section-title';

function App() {

  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked)
  }
  
  return (
    <div className="App">
      <SectionTitle handleChange={handleChange} checked={checked}/>
      <CardContainer data={dataArray} checked={checked}/>
    </div>
  );
}

export default App;
