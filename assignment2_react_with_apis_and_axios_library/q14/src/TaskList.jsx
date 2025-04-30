import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [err, setError] = useState("");

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        setTasks((prev) => [...prev, JSON.parse(response.data)]);
        setError("");
      }) // Error here?
      .catch((error) => {
        console.log("Error fetching tasks:", error);
        setError(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li> // Error here?
        ))}
      </ul>
      {err ? err : ""}
    </div>
  );
}
export default TaskList;
