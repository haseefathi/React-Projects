import React, {useState} from 'react'

import './MyApp.css'
import data from './data'

import List from './List'


function App() {

  const [people, setPeople] = useState(data);

  const deleteAll = () => {
    setPeople([]);
  }

  return (
    <main>
      <div className="section">
        <h1>Birthdays today<span className="birthdayCount">{people.length}</span></h1>
            
        <List people = {people}/>


        <button className="button" onClick = {deleteAll}>Delete All</button>
      </div>
    </main>
  );
}

export default App;
