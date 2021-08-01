// import { useState } from 'react';

import data from './data'
import Question from './Question';

import './App.css';

function App() {

  return (
    <main>

      <section className = "card">
        <h1>Questions And Answers About Login</h1>

        <div className = 'question-list'>
        {
          data.map((question) => {
            return <Question question = {question} key = {question.id}/>
          })
        }
        </div>
      </section>
      

    </main>
  );
}

export default App;
