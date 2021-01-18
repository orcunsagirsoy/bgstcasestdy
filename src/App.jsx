import './App.css'
import CaseTable from './components/CaseTable';
import CaseChart from './components/CaseChart';
import React, { useState, useEffect } from 'react';
import Detail from './components/Detail'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function App() {

  const [data, setData] = useState();

  const FETCH_URL = 'http://www.json-generator.com/api/json/get/bUgMRhYjKG?indent=2'
  
  useEffect(() => {
      getDataWithFetch();
    }, []);
  
  const getDataWithFetch = async () => {
      const response = await fetch(FETCH_URL);
      const jsonData = await response.json();
      setData(jsonData);
  };

  return (
    data ? 
    (
    <Router>
      <div className="container">
        <div>
        <CaseChart data={data.graphData}/>
        </div>
        <div className='mt-5'>
        <CaseTable data={data.nodes}/>
        </div>
      </div>
      <Route path="/detail/:id" component={Detail} />
      <Route exact path="/" />
    </Router>) : ('Loading')
  );
}

export default App;
