import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState("");
  const error = document.createElement("p");
  error.innerText = "Form is empty";

  const div = document.querySelector("div");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      alert(form);
    } else {
      div.appendChild(error);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            onChange={(e) => setForm(e.target.value)}
            value={form}
            type="text"
            placeholder="name"
          />

          <button>set</button>
        </form>
      </div>
    </>
  );
}

export default App;
