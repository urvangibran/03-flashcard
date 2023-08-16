import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "2log8?",
    answer: "3"
  },
  {
    id: 2,
    question: "lim x >> 1 x?",
    answer: "1"
  },
  {
    id: 3,
    question: "1,5,2,6,3,7,...?",
    answer: "4"
  },
  {
    id: 4,
    question: "a,b,b,b,e,e,c,..,..?",
    answer: "h h"
  },
  {
    id: 5,
    question: "3^1012210?",
    answer: "gatau"
  },
  {
    id: 6,
    question:
      "8?",
    answer: "2^3 || 1 + 7 || 1/2log-3"
  }
];

function App() {
  const [select, setSelect] = useState(null)

  function handleClick(id) {
    // if(select === id) setSelect(null)
    // else setSelect(id)
    setSelect( id === select ? null : id )
  }

  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div key={question.id} onClick={() => handleClick(question.id)} className={`${select === question.id ? "selected" : ""} `} >
          <p> { select === question.id ? question.answer : question.question} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
