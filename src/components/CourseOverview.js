export default function CourseOverview({ title, description, progress }) {
  return (
    <section className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        <div className="bg-blue-600 text-white p-2 rounded-full">
          Progress: {progress}%
        </div>
      </div>
    </section>
  );
}
