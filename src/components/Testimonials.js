export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Testimonial */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="mb-4">
              "This platform has transformed the way I learn. The courses are
              well-structured and easy to follow."
            </p>
            <h3 className="text-lg font-semibold">- Student Name</h3>
          </div>
          {/* Repeat testimonials as needed */}
        </div>
      </div>
    </section>
  );
}
