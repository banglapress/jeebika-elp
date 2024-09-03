import { useRouter } from "next/router";
import CourseOverview from "../../components/CourseOverview";
import VideoPlayer from "../../components/VideoPlayer";
import QuizComponent from "../../components/QuizComponent";
import AssignmentUpload from "../../components/AssignmentUpload";
import ModuleNavigation from "../../components/ModuleNavigation";

export default function ModuleDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Example data; in a real scenario, fetch this data from an API
  const moduleData = {
    title: `Module ${id}: Introduction to XYZ`,
    description: "This module covers the basics of XYZ.",
    videoUrl: "/videos/sample.mp4",
    progress: 50,
    quiz: {
      questions: [
        {
          id: 1,
          text: "What is XYZ?",
          options: ["Option 1", "Option 2", "Option 3"],
        },
        {
          id: 2,
          text: "How does XYZ work?",
          options: ["Option A", "Option B", "Option C"],
        },
      ],
    },
    previousModule: id > 1 ? id - 1 : null,
    nextModule: id < 10 ? parseInt(id) + 1 : null,
  };

  const handleQuizSubmit = (answers) => {
    console.log("Quiz submitted with answers:", answers);
    // Process quiz results, update progress, etc.
  };

  const handleAssignmentSubmit = (file) => {
    console.log("Assignment submitted:", file);
    // Upload file, notify instructors, etc.
  };

  return (
    <div className="container mx-auto py-8">
      <CourseOverview
        title={moduleData.title}
        description={moduleData.description}
        progress={moduleData.progress}
      />
      <VideoPlayer videoUrl={moduleData.videoUrl} />
      <QuizComponent
        questions={moduleData.quiz.questions}
        onSubmit={handleQuizSubmit}
      />
      <AssignmentUpload onSubmit={handleAssignmentSubmit} />
      <ModuleNavigation
        previousModule={moduleData.previousModule}
        nextModule={moduleData.nextModule}
      />
    </div>
  );
}
