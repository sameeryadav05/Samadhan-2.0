import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students");
        if (!response.ok) throw new Error("Failed to fetch students");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  console.log(data);
  
  if (loading) return <p className="loading">Loading students...</p>;
  if (error) return <p className="error">❌ {error}</p>;

  return (
    <div className="app">
      <h1 className="title">🎓 Student Directory</h1>
      <ul className="student-list">
        {data.map((student) => (
          <li key={student.id} className="student-card">
            <h2>{student.name}</h2>
            <p>📊 Marks: <strong>{student.marks}</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
