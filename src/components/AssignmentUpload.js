import { useState, useEffect } from "react";

export default function AssignmentComponent({ onSubmit }) {
  const [file, setFile] = useState(null);
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds
  const [assignmentStarted, setAssignmentStarted] = useState(false);

  useEffect(() => {
    if (assignmentStarted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft <= 0) {
      onSubmit(file, false); // Submission failed due to time out
    }
  }, [timeLeft, assignmentStarted]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      onSubmit(file, true);
    }
  };

  return (
    <div className="assignment-component">
      {!assignmentStarted ? (
        <button onClick={() => setAssignmentStarted(true)}>
          Start Assignment (72 hours)
        </button>
      ) : (
        <div>
          <p>
            Time Left: {Math.floor(timeLeft / 3600)} hours{" "}
            {Math.floor((timeLeft % 3600) / 60)} minutes
          </p>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSubmit}>Submit Assignment</button>
        </div>
      )}
    </div>
  );
}
