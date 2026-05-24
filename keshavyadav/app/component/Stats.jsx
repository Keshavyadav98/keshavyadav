export default function Stats() {
  const data = [
    ["3+", "Years Experience"],
    ["25+", "Projects"],
    ["15+", "Happy Clients"],
    ["10+", "Technologies"],
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >
              <h2 className="text-5xl font-black text-cyan-400">
                {item[0]}
              </h2>
              <p className="text-gray-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}