// src/components/AssignmentComponent.js

import { useState } from "react";

export default function AssignmentComponent({ onSubmit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmit(true);
  };

  return (
    <div>
      <h2>Assignment</h2>
      {/* Example form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <textarea placeholder="Write your assignment here..." />
        <button type="submit">Submit Assignment</button>
      </form>
      {isSubmitted && <p>Assignment submitted successfully!</p>}
    </div>
  );
}
