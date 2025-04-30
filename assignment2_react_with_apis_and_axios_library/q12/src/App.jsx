import { useRef } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const data = useRef();
  const [err,setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.current.value) {
      alert(data.current.value);
      setErr("")
    } else {
      setErr("form is empty")
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={data} />
        <button>submit</button>
        {
          err?<div>{err}</div>:""
        }
      </form>
    </>
  );
}

export default App;
