// src/data/mockCourseData.js

export const courseData = {
  id: 1,
  title: "Comprehensive E-Learning Course",
  contents: [
    {
      id: 1,
      title: "Introduction to the Course",
      videoUrl: "/videos/intro.mp4",
      description:
        "This introductory video covers the course objectives and structure.",
      quiz: [
        {
          question: "What will this course cover?",
          options: [
            { text: "Introduction to Programming", correct: true },
            { text: "Advanced JavaScript", correct: false },
            { text: "Database Management", correct: false },
            { text: "Cloud Computing", correct: false },
          ],
        },
        // Add more questions...
      ],
    },
    // Add more contents...
  ],
  assignment: {
    title: "Final Assignment",
    description:
      "Complete the final assignment to demonstrate your understanding of the course material.",
    maxMarks: 100,
    submissionDeadline: 72, // hours
  },
};
