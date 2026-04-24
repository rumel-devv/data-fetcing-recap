// cache -> SSG -> Static site generation
// recvalidate -> ISR -> Incremental Site Regeneration
// Dynamic -> SSR -> Server site rendering

const ModelsPage = async () => {
  const res = await fetch("http://localhost:8000/models", {next:{ revalidate:10 }});
  const models = await res.json();
  console.log(models);
  return (
    <div className="w-9/12 mx-auto space-y-4 my-4">
      <h1 className="text-2xl text-green-600 font-semibold">Models Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Content */}
            <h2 className="text-xl font-semibold capitalize ">{model.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{model.description}</p>

            {/* Price + Status */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-600 font-bold">${model.price}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  model.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {model.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
