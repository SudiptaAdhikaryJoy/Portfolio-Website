import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import Home from '../Home/Home';
 
function App() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);
 
  return (
    <React.Fragment>
      <Home />
      <Lines customLoading={loading} />
    </React.Fragment>
  );
}