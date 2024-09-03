export default function ModuleNavigation({ previousModule, nextModule }) {
  return (
    <div className="flex justify-between mt-8">
      {previousModule && (
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
          onClick={() => (window.location.href = `/module/${previousModule}`)}
        >
          Previous Module
        </button>
      )}
      {nextModule && (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
          onClick={() => (window.location.href = `/module/${nextModule}`)}
        >
          Next Module
        </button>
      )}
    </div>
  );
}
