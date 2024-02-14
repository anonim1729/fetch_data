import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const newItems = await response.json();
        setItems(newItems);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();

  }, [reqType])
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
