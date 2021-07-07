import React, {useState} from 'react';
import parse from 'html-react-parser';
import './App.css';

function App() {
  const [markdown,input] = useState ("***Italic***\n**Bold**\n_Underline_\n~Striped~");
  const convertedMarkdown = markdown.replace(/\*\*\*(.+?)\*\*\*/g, '<i>$1</i>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/_(.+?)_/g, '<u>$1</u>').replace(/~(.+?)~/g, '<del>$1</del>').replace(/\n/g, "<br>");
  
  return (
    <div className="App">
      <h1>Markdown Editor</h1> 
      <div className="Title">    
        <p>Input</p>
        <p>Result</p>
      </div>
        <div className="Input">
         <textarea  value = {markdown} onChange={e => input(e.target.value)} > </textarea>
          <div className="Result">
            <p>{parse(convertedMarkdown)}</p>
          </div>
      </div>
    </div>       
  );
}

export default App;
