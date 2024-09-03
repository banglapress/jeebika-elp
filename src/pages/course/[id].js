// src/pages/course/[id].js

import AssignmentComponent from "@/components/AssignmentUpload";
import ContentIndex from "@/components/ContentIndex";
import InstructionPanel from "@/components/InstructionPanel";
import QuizComponent from "@/components/QuizComponent";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";
import { courseData } from "../data/mockCourseData";

export default function CoursePage({ course }) {
  const [currentContent, setCurrentContent] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);
  const [assignmentUnlocked, setAssignmentUnlocked] = useState(false);

  const handleVideoEnd = () => {
    setQuizPassed(false);
    setAssignmentUnlocked(false);
  };

  const handleQuizSubmit = (passed) => {
    setQuizPassed(passed);
    if (passed) {
      if (currentContent % 2 === 1) {
        setAssignmentUnlocked(true);
      } else {
        setCurrentContent(currentContent + 1);
      }
    }
  };

  const handleAssignmentSubmit = (submitted) => {
    if (submitted) {
      const score = 80; // Mock score
      if (score >= 80) {
        setCurrentContent(currentContent + 1);
      }
    } else {
      alert("Assignment submission failed! 10 marks deducted.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Main Content Area */}
      <div className="flex-grow p-4 md:w-3/4">
        {/* Video Player */}
        <div className="relative mb-4">
          <VideoPlayer
            videoUrl={course.contents[currentContent].videoUrl}
            onVideoEnd={handleVideoEnd}
          />
        </div>

        {/* Instruction Panel */}
        <div className="mb-4">
          <InstructionPanel
            text={course.contents[currentContent].description}
          />
        </div>

        {/* Quiz or Assignment */}
        <div className="mb-4">
          {!quizPassed ? (
            <QuizComponent
              questions={course.contents[currentContent].quiz}
              onSubmit={handleQuizSubmit}
            />
          ) : assignmentUnlocked ? (
            <AssignmentComponent onSubmit={handleAssignmentSubmit} />
          ) : null}
        </div>
      </div>

      {/* Content Index */}
      <div className="hidden md:block w-64 bg-gray-100 p-4 border-l border-gray-300">
        <ContentIndex
          contents={course.contents}
          currentContent={currentContent}
          onContentSelect={setCurrentContent}
        />
      </div>

      {/* Mobile View Content Index */}
      <div className="block md:hidden bg-gray-100 p-4 border-t border-gray-300">
        <ContentIndex
          contents={course.contents}
          currentContent={currentContent}
          onContentSelect={setCurrentContent}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const course = courseData; // Fetch from API in production
  console.log("Fetched Course Data:", course); // Log data before passing as props
  return { props: { course } };
}
