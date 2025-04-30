import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("email format error");
    } else {
      setError("");
      setEmails([...emails, email]);
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
      <div>
        {emails.map((email) => {
          return <p>{email}</p>;
        })}
      </div>
      <div>{error ? error : ""}</div>
    </>
  );
}

export default App;
