export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Interactive Quizzes</h3>
            <p>Test your knowledge with quizzes after each module.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Expert Tutors</h3>
            <p>
              Learn from industry professionals and experienced instructors.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Flexible Learning</h3>
            <p>Access your courses anytime, anywhere, on any device.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
